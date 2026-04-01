/**
 * Production server for serving the React SPA built with Vite
 * Listens on PORT environment variable (defaults to 8080 for Cloud Run)
 * Handles SPA routing by serving index.html for non-existent routes
 * 
 * Cloud Run Requirements:
 * - Must listen on 0.0.0.0
 * - Must read PORT from environment variable
 * - Must start within 4 minutes
 * - Must respond to health checks
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

// Configuration
const PORT = parseInt(process.env.PORT || '8080', 10);
const HOST = '0.0.0.0';
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Startup validation
console.log('[Startup] Validating environment...');
console.log(`[Config] PORT=${PORT}`);
console.log(`[Config] HOST=${HOST}`);
console.log(`[Config] DIST_PATH=${distPath}`);
console.log(`[Config] NODE_ENV=${process.env.NODE_ENV || 'production'}`);

// Check if dist folder exists
if (!fs.existsSync(distPath)) {
  console.error('[ERROR] dist folder not found at:', distPath);
  console.error('[ERROR] Please run "npm run build" before starting server');
  process.exit(1);
}
console.log('[Startup] ✓ dist folder exists');

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('[ERROR] index.html not found at:', indexPath);
  console.error('[ERROR] Build output incomplete');
  process.exit(1);
}
console.log('[Startup] ✓ index.html found');

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files with aggressive caching
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: false,
  index: false, // Don't automatically serve index.html
}));

// Health check endpoint (required by Cloud Run)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API/health readiness probe
app.get('/health/live', (req, res) => {
  res.status(200).json({ alive: true });
});

app.get('/health/ready', (req, res) => {
  res.status(200).json({ ready: true });
});

// Serve static assets
app.use('/assets', express.static(path.join(distPath, 'assets'), {
  maxAge: '30d',
  etag: false,
}));

// SPA fallback - serve index.html for routes
app.get('*', (req, res) => {
  // Only serve index.html for HTML requests
  const acceptHeader = req.headers.accept || '';
  
  if (acceptHeader.includes('text/html') || !path.extname(req.path)) {
    try {
      res.sendFile(indexPath, (err) => {
        if (err && err.code !== 'ERR_HTTP_REQUEST_TIMEOUT') {
          console.error('[Error] Failed to send index.html:', err.message);
          res.status(500).send('Internal Server Error');
        }
      });
    } catch (err) {
      console.error('[Error] Exception in SPA fallback:', err.message);
      res.status(500).send('Internal Server Error');
    }
  } else {
    // For non-HTML requests (assets, etc), return 404
    res.status(404).json({ error: 'Not Found' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error(`[Error] ${status}: ${message}`, err.stack);
  res.status(status).json({ 
    error: message,
    status: status,
    timestamp: new Date().toISOString()
  });
});

// Graceful shutdown handling
let isShuttingDown = false;
const gracefulShutdown = (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  
  console.log(`[Shutdown] Received ${signal}, closing gracefully...`);
  
  if (server) {
    server.close(() => {
      console.log('[Shutdown] Server closed');
      process.exit(0);
    });
    
    // Force close after 30 seconds
    setTimeout(() => {
      console.error('[Shutdown] Timeout - forcing exit');
      process.exit(1);
    }, 30000);
  } else {
    process.exit(0);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGHUP', () => gracefulShutdown('SIGHUP'));

// Start server
let server;
try {
  server = app.listen(PORT, HOST, () => {
    console.log('');
    console.log('═════════════════════════════════════════════════');
    console.log('  ✓ Server started successfully');
    console.log(`  ✓ Listening on ${HOST}:${PORT}`);
    console.log(`  ✓ Serving React SPA from ${distPath}`);
    console.log(`  ✓ Environment: ${process.env.NODE_ENV || 'production'}`);
    console.log('═════════════════════════════════════════════════');
    console.log('');
  });
  
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`[Error] Port ${PORT} already in use`);
    } else {
      console.error('[Error] Server error:', err.message);
    }
    process.exit(1);
  });
} catch (err) {
  console.error('[Error] Failed to start server:', err.message);
  console.error(err.stack);
  process.exit(1);
}

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('[Fatal] Uncaught exception:', err.message);
  console.error(err.stack);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('[Fatal] Unhandled rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

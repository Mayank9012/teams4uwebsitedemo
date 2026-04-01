/**
 * Production server for serving the React SPA built with Vite
 * Listens on PORT environment variable (defaults to 8080 for Cloud Run)
 * Handles SPA routing by serving index.html for non-existent routes
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// Middleware to handle graceful shutdown
let server;
const gracefulShutdown = () => {
  console.log('Received shutdown signal, closing server gracefully...');
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
    // Force close after 30 seconds
    setTimeout(() => {
      console.error('Could not close connections in time, forcing shutdown');
      process.exit(1);
    }, 30000);
  }
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Serve static files from dist folder
const distPath = path.join(__dirname, 'dist');

// Check if dist folder exists
if (!fs.existsSync(distPath)) {
  console.error('ERROR: dist folder not found. Please run "npm run build" first.');
  process.exit(1);
}

// Middleware
app.use(express.static(distPath, {
  maxAge: '1d', // Cache static assets for 1 day
  etag: false,
}));

// Health check endpoint for Cloud Run
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// SPA routing: Serve index.html for all non-asset routes
app.get('*', (req, res) => {
  // Don't serve index.html for API calls or actual files
  if (req.accepts('html')) {
    res.sendFile(path.join(distPath, 'index.html'), (err) => {
      if (err) {
        console.error('Error sending index.html:', err);
        res.status(500).send('Server error');
      }
    });
  } else {
    res.status(404).send('Not Found');
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
server = app.listen(PORT, HOST, () => {
  console.log(`✓ Server running on http://${HOST}:${PORT}`);
  console.log(`✓ Serving static files from: ${distPath}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✓ Ready to accept connections...`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

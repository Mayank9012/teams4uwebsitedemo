const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 8080;
const HOST = '0.0.0.0';
const staticDir = path.join(__dirname, 'dist');

// Serve static files
app.use(express.static(staticDir));

// SPA fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

// Graceful startup logging and error handling
const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception', err);
  // let the container exit so the platform can restart if needed
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection', err);
  process.exit(1);
});

module.exports = server;

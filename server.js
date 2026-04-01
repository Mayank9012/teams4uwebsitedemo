const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 8080;
const staticDir = path.join(__dirname, 'dist');

app.use(express.static(staticDir));
app.get('*', (req, res) => res.sendFile(path.join(staticDir, 'index.html')));

// bind explicitly to 0.0.0.0 so cloud runtimes can connect
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on 0.0.0.0:${PORT}`);
});

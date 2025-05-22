const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable compression for all responses
app.use(compression({
  // Compression level (1-9), higher = better compression but slower
  level: 6,
  // Only compress responses above 1kb
  threshold: 1024,
  // Compress all text-based files
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  // Enable caching for static files
  maxAge: '1y',
  // Enable compression for static files
  setHeaders: (res, path) => {
    // Set cache control headers
    if (path.endsWith('.html')) {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      // Cache all other files for 1 year
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

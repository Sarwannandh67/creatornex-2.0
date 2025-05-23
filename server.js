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
    // Set cache control headers based on file type
    if (path.endsWith('.html')) {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    } else if (path.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
      // Cache images for 1 year
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
    } else if (path.match(/\.(css|js)$/)) {
      // Cache CSS and JS files for 1 week
      res.setHeader('Cache-Control', 'public, max-age=604800');
      res.setHeader('Expires', new Date(Date.now() + 604800000).toUTCString());
    } else if (path.match(/\.(woff|woff2|ttf|eot)$/)) {
      // Cache fonts for 1 year
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
    } else {
      // Default cache for other files (1 day)
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.setHeader('Expires', new Date(Date.now() + 86400000).toUTCString());
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

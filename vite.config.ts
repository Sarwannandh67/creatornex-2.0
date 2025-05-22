import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { splitVendorChunkPlugin } from 'vite';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
        progressive: true,
      },
      jpeg: {
        quality: 80,
        progressive: true,
      },
      jpg: {
        quality: 80,
        progressive: true,
      },
      webp: {
        lossless: true,
        quality: 85,
      },
      avif: {
        lossless: true,
        quality: 85,
      },
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false,
      filter: /\.(js|mjs|json|css|html)$/i,
      verbose: true
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
      filter: /\.(js|mjs|json|css|html)$/i,
      verbose: true
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap' // gives a more detailed visualization
    }),
  ],
  worker: {
    format: 'es',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-dropdown-menu',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    exclude: ['@genkit-ai/googleai'],
  },
  esbuild: {
    jsx: 'automatic',
    logLevel: 'info',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
  },
  // Optimize build
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    target: 'esnext', // Modern browsers for better performance
    modulePreload: {
      polyfill: true,
    },
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@radix-ui/react-')) {
              return 'vendor-ui';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react-hook-form') || id.includes('@hookform/resolvers') || id.includes('zod')) {
              return 'vendor-forms';
            }
            if (id.includes('date-fns') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            if (id.includes('recharts') || id.includes('victory') || id.includes('d3')) {
              return 'vendor-charts';
            }
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        compact: true,
        generatedCode: {
          preset: 'es2015',
          symbols: false,
          constBindings: true,
        },
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3,
        unsafe: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        pure_getters: true,
        reduce_vars: true,
        join_vars: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        if_return: true,
        collapse_vars: true,
        reduce_funcs: true,
      },
      mangle: {
        properties: {
          regex: /^_/,
        },
        toplevel: true,
        module: true,
      },
      format: {
        comments: false,
        ecma: 2020,
        wrap_iife: true,
        wrap_func_args: true,
      },
      module: true,
      toplevel: true,
      keep_classnames: false,
      keep_fnames: false,
    },
    sourcemap: false,
  },
});

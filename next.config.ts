import type {NextConfig} from 'next';
import crypto from 'crypto';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
  },
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable gzip compression
  compress: true,
  // Server optimization
  httpAgentOptions: {
    keepAlive: true,
  },
  // Enable static page generation
  output: 'standalone',
  // Optimize bundle splitting
  webpack: (config: any, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Ensure terser is used for minification
      const TerserPlugin = require('terser-webpack-plugin');
      const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
      
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              parse: {
                ecma: 2020,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: true,
                drop_debugger: true,
                pure_funcs: [
                  'console.log',
                  'console.info',
                  'console.debug',
                  'console.warn',
                  'console.error',
                ],
                passes: 3,
                reduce_vars: true,
                reduce_funcs: true,
                keep_fnames: false,
                toplevel: true,
                unsafe: true,
                unsafe_math: true,
                unsafe_methods: true,
                unsafe_proto: true,
                unsafe_regexp: true,
                unsafe_undefined: true,
                dead_code: true,
                evaluate: true,
                booleans: true,
                typeofs: true,
                loops: true,
                unused: true,
                hoist_funs: true,
                hoist_vars: true,
                if_return: true,
                join_vars: true,
                collapse_vars: true,
                arguments: true,
                sequences: true,
              },
              mangle: {
                safari10: true,
                keep_classnames: false,
                keep_fnames: false,
                toplevel: true,
                reserved: [],
                properties: {
                  regex: /^_/,
                },
              },
              format: {
                comments: false,
                ascii_only: true,
                beautify: false,
                indent_level: 0,
                wrap_iife: true,
              },
              sourceMap: false,
              module: true,
              toplevel: true,
            },
            extractComments: false,
          }),
          new CssMinimizerPlugin(),
        ],
        splitChunks: {
          chunks: 'all',
          minSize: 5000,
          maxSize: 80000,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules)\/node_modules\/(react|react-dom|scheduler|prop-types|use-subscription)\//, 
              priority: 40,
              enforce: true,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
              enforce: true,
            },
            lib: {
              test(module: any) {
                return module.size() > 40000 && /node_modules[/\\]/.test(module.identifier());
              },
              name(module: any) {
                const hash = crypto.createHash('sha1');
                hash.update(module.identifier());
                return hash.digest('hex').substring(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
              enforce: true,
            },
            shared: {
              name(module: any, chunks: any) {
                return crypto
                  .createHash('sha1')
                  .update(
                    chunks.reduce((acc: string, chunk: any) => acc + chunk.name, '')
                  )
                  .digest('hex');
              },
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        concatenateModules: true,
        flagIncludedChunks: true,
        usedExports: true,
        providedExports: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        sideEffects: true,
        innerGraph: true,
        mangleExports: 'deterministic',
        nodeEnv: 'production',
      };

      // Add module concatenation optimization
      config.optimization.concatenateModules = true;

      // Ensure tree shaking is enabled
      config.optimization.usedExports = true;

      // Add performance hints
      config.performance = {
        maxEntrypointSize: 300000,
        maxAssetSize: 300000,
        hints: 'warning',
      };
    }
    return config;
  },
  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,
  experimental: {
    // Enable modern optimizations
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-*',
      'next/font',
      '@next/font',
      'next/navigation',
      '@/components/ui/*',
      '@/lib/*'
    ],
    serverActions: {
      bodySizeLimit: 10 * 1024 * 1024, // 10MB
    },
    // Enable modern features
    taint: true,
    optimisticClientCache: true,
    serverMinification: true,
    turbo: {
      loaders: {
        // Configure loaders for better performance
        '.js': ['jsx'],
        '.ts': ['tsx'],
      },
      rules: {
        // Add rules for better optimization
      },
    },
  },
  // Cache configuration
  generateEtags: true,
  cache: true,
};

export default withBundleAnalyzer(nextConfig);

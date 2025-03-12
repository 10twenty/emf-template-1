/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Suppress specific hydration warnings
  reactStrictMode: true,
  compiler: {
    // Suppress hydration warnings for browser extension attributes
    ignoreBrowserWarnings: true,
  },
  // Ensure static files are copied to the output directory
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Suppress specific hydration warnings
  reactStrictMode: true,
  compiler: {
    // Suppress hydration warnings for browser extension attributes
    ignoreBrowserWarnings: true,
  }
}

module.exports = nextConfig 
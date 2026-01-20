/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for better performance
  // This will automatically optimize images while maintaining visual quality
  images: {
    // Allow external images from Unsplash
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Enable modern image formats (AVIF/WebP) for better compression
    formats: ['image/avif', 'image/webp'],
    // Set quality to maintain visual match
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable static optimization
  output: 'standalone',
  // Compress responses
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Performance: Enable CSS optimization (requires critters)
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

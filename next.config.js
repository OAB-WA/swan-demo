/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization to ensure 100% visual match (Option A)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

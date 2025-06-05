/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/airpods-max/i/images/**',
      },
      {
        protocol: 'https',
        hostname: 'apple.com',
        pathname: '/airpods-max/i/images/**',
      },
    ],
    // Allow images to be loaded from any domain
    domains: ['apple.com', 'www.apple.com'],
    // Use local images without optimization in development mode for faster loading
    unoptimized: process.env.NODE_ENV !== 'production',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;

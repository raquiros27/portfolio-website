/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Keep fast local iteration while allowing optimized delivery in production.
    unoptimized: process.env.NODE_ENV !== "production",
  },
};

module.exports = nextConfig;


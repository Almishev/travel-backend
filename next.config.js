/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'travel-agency-toni.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'travel-agency-toni.s3.eu-central-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.s3.*.amazonaws.com',
      },
    ],
  },
  // Увеличаваме лимита за API routes (в MB)
  // Забележка: Vercel все още има ограничение от 4.5MB за request body
  // За по-големи файлове трябва да се използва streaming или presigned URLs
}

module.exports = nextConfig

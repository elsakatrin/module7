/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    path: "",
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [
      `https://elsakatrin.prismic.io/`,
      "images.prismic.io",
      "prismic-io.s3.amazonaws.com",
    ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.prismic.io',
          port: '',
          pathname: '/elsakatrin/**',
        },
      
    ],
  },
}

module.exports = nextConfig

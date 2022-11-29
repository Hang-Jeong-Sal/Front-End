/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hang-jeong-sal.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com"
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net"
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`,
      },
    ];
  },
}

// module.exports = nextConfig;
module.exports = removeImports({
  ...nextConfig,
  experimental: { esmExternals: true }
});
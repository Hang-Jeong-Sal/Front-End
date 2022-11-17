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
    ],
  },
}

// module.exports = nextConfig;
module.exports = removeImports({
  ...nextConfig,
  experimental: { esmExternals: true }
});
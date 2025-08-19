/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/radical",
  assetPrefix: "/radical/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

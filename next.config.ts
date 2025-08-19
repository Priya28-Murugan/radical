import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/radical",
  assetPrefix: "/radical/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

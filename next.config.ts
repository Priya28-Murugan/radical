import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // 👈 needed for GitHub Pages
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const API_ORIGIN = process.env.API_URL ?? "https://khan-cargo.onrender.com";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_ORIGIN}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;

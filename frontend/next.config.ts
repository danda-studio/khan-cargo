import type { NextConfig } from "next";

const API_ORIGIN = process.env.API_URL ?? "https://khan-cargo.onrender.com";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    // Never re-encode photos through /_next/image (was forcing q=75 → soap at 1920)
    unoptimized: true,
    qualities: [100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
    imageSizes: [64, 96, 128, 256, 384, 640, 750, 880],
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow requests from all hosts in dev mode
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
};

export default nextConfig;

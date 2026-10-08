import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.3.9",
    "192.168.3.9:3000",
  ],
};

export default nextConfig;

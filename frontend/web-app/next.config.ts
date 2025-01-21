import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.pixabay.com" }
    ]
  }
};

export default nextConfig;

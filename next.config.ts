import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/ventura-static-map-images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/media_ventura_travel/**",
      },
      {
        protocol: "https",
        hostname: "media.venturatravel.org",
      },
    ],
  },
};

export default nextConfig;

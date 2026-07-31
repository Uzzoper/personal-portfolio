import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
};

export default analyzer(nextConfig);

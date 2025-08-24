import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⛔ Ignore les erreurs ESLint au moment du build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⛔ Ignore les erreurs TypeScript au moment du build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

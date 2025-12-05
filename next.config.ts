import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/Resume-Nextjs" : "";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  output: "export",
   basePath: "/IchBinDieKaiserin",
  assetPrefix: isProd ? '/KaiserinDerWelt.github.io/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};



module.exports = nextConfig;



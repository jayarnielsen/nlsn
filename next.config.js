/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@gaze-ui/react"],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: ["@gaze-ui/react"],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

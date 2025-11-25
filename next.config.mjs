/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ["images.unsplash.com"], // whitelist external image domains
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "**", protocol: "http", pathname: "**" },
      { hostname: "**", protocol: "https", pathname: "**" },
    ],
  },
};

export default nextConfig;

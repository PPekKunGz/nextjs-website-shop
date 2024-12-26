/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", //for cloudflared page
  // output: "standalone",
  reactStrictMode: false,
  images: {
    domains: ["media.discordapp.net", "dummyimage.com"],
    unoptimized: true,
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
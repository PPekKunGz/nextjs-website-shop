/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", //for cloudflared page
  // output: "standalone",
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["media.discordapp.net", "dummyimage.com"],
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  env: {
    CDN: "http//localhost:3131",
    NEXT_URL: "http://localhost:3000"
  }
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "img.youtube.com",
      },
      {
        hostname: "img1.ak.crunchyroll.com",
      },
    ],
  },
};

export default nextConfig;

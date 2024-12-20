/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/temporadas",
        destination: "/temporadas/now",
        permanent: true,
      },
      {
        source: "/anime",
        destination: "/",
        permanent: true,
      },
      {
        source: "/personaje",
        destination: "/",
        permanent: true,
      },
      {
        source: "/persona",
        destination: "/",
        permanent: true,
      },
    ];
  },
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

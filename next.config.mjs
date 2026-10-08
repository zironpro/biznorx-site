/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → the ./out folder is the whole website (served by Nginx on Dokploy).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Pin the project root (a stray package-lock.json in the home folder confuses auto-detection).
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;

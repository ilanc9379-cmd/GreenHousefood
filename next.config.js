// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // AUCUN output: 'export' ici
  experimental: { appDir: false }, // force le Pages Router
  images: { unoptimized: true },   // pour éviter toute friction côté images
};
module.exports = nextConfig;

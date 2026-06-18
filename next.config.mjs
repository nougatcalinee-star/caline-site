/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Les visuels sont des <img> simples : on ne bloque pas le build sur les warnings ESLint.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For username.github.io (root domain), leave basePath commented out
  // basePath: '',
  
  // For project repository (username.github.io/repo-name), uncomment and set:
  // basePath: '/portfolio-site',
  // assetPrefix: '/portfolio-site',
};

export default nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  // distDir: 'dist',
  // basePath: '/cv_isaac',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
 
module.exports = {
  output: 'export',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones para animaciones
  experimental: {
    optimizeCss: true,
  },
  // Configuración para mejorar el rendimiento de las animaciones
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

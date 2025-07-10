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
  // Configuración para mejorar la hidratación
  swcMinify: true,
};

export default nextConfig;

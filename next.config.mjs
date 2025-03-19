/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{ 
        ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
      serverActions: {
        bodySizeLimit: '10mb',
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '127.0.0.1',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          pathname: '/**',
        },
      ],
      domains: ['127.0.0.1', 'localhost'], // Add your domains here
    },
};

export default nextConfig;

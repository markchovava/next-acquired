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
        bodySizeLimit: '30mb',
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
        {
          protocol: 'http',
          hostname: '143.110.255.30',
          pathname: '/**',
        },
      ],
      domains: [
        '127.0.0.1', 
        'localhost', 
        '143.110.255.30'
      ], // Add your domains here
    },
};

export default nextConfig;

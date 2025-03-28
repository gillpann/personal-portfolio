/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf|png|jpe?g|gif)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  
  images: {
    unoptimized: true,
  },

  experimental: {
    serverComponentsExternalPackages: ['three']
  },

};

export default nextConfig;
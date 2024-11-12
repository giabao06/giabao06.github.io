/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: ''
            }
        ]
    },
    output: 'standalone'
};

export default nextConfig;

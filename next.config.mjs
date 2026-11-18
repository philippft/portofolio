/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/toolkit', destination: '/#skills', permanent: false },
      { source: '/projects', destination: '/#projects', permanent: false },
    ];
  },
};

export default nextConfig;

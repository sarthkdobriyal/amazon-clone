module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'www.junglescout.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
}
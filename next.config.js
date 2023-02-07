module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'www.junglescout.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/G/31/A2I-Convert/mobile/IconFarm/**',
      },
      
    ],
  },
  env:{
    stripe_public_key:`${process.env.STRIPE_PUBLIC_KEY}`,
  }
}
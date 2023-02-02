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
      
    ],
  },
  env:{
    stripe_public_key:`${process.env.STRIPE_PUBLIC_KEY}`,
  }
}
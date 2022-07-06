/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow images from images.unsplash.com
  images: {
    domains: [
      'images.unsplash.com',
      'klydewarrenpark.imgix.net',
      'lakehighlands.advocatemag.com',
      'www.papercitymag.com',
      'parksfordowntowndallas.org',
      'bloximages.newyork1.vip.townnews.com',
      'www.deepellumtexas.com'
    ],
  },
}

module.exports = nextConfig

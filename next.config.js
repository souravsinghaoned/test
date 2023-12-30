const { sources } = require('next/dist/compiled/webpack/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects : async ()=>{
    return[
      // {
      //   source : '/about',
      //   destination : '/',
      //   permanent : false
      // },
      // {
      //   source : '/blog',
      //   destination : '/',
      //   permanent : false
      // }
    ]
  }
}

module.exports = nextConfig

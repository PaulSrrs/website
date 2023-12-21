/** @type {import('next').NextConfig} */
const path = require("path");
const nextTranslate = require('next-translate-plugin')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextTranslate(nextConfig)


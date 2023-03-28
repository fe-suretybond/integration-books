/** @type {import('next').NextConfig} */
const path = require("path");

const imageDomains = [
  "",
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: { domains: imageDomains },
};

module.exports = nextConfig;

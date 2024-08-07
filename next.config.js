/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "i.imghippo.com",
      "localhost",
      "3.0.18.58",
      "54.179.147.74",
      "127.0.0.1",
    ],
  },
  publicRuntimeConfig: {
    IFRAME_URL: process.env.IFRAME_URL,
  },
};

module.exports = nextConfig;

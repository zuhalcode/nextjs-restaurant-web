/** @type {import('next').NextConfig} */

// module.exports = nextConfig
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
  images: {
    domains: ["localhost"],
  },
});


const withPWA = require("next-pwa");

module.exports = {
  reactStrictMode: true,
    i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  target: 'serverless'
}

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
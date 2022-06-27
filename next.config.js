
const withPWA = require("next-pwa");

module.exports = {
  reactStrictMode: true,
    i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  distDir: 'build'
}

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
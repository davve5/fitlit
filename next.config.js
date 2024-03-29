// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  swcMinify: true,
   pwa: {
     dest: 'public',
     register: true,
     skipWaiting: true,
  },
  eslint: {
    dirs: ['src'],
  },
});


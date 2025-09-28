// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination:
          "https://api.farcaster.xyz/miniapps/hosted-manifest/01998ea7-d0fc-98eb-5bf6-87ab68598de1",
        permanent: false, // false = 307 Temporary Redirect
      },
    ];
  },
};

module.exports = nextConfig;

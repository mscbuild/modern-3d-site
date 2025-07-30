/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 async headers() {
    return [
      {
        source: '/(.*)', // Применяется ко всем путям
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              upgrade-insecure-requests;
              form-action 'self';
              font-src  'self';
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              connect-src 'self';
              frame-ancestors 'none';
              object-src 'none';
              base-uri 'self';
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

 

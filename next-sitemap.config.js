/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dabar.com.br',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
  additionalPaths: async () => [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/sobre', changefreq: 'monthly', priority: 0.8 },
    { loc: '/solucoes', changefreq: 'weekly', priority: 0.9 },
    { loc: '/contato', changefreq: 'monthly', priority: 0.8 },
    { loc: '/transparencia', changefreq: 'yearly', priority: 0.5 },
    { loc: '/dabar-indica', changefreq: 'monthly', priority: 0.7 },
  ],
}

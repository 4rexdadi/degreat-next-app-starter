/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.WEBSITE_URL || "https://example.com",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalPaths: async (config) => [
      await config.transform(config, "/comments"),
    ],
    additionalSitemaps: ["http://localhost:3000/serversite.xml"],
  },
};

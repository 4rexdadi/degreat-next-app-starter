/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.WEBSITE_URL || "http://localhost:3000"

module.exports = {
  siteUrl,
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
    additionalSitemaps: [`${siteUrl}/serverSite.xml`],
  },
};

const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Harshit Arora', // Navigation and Site Title
  siteTitleAlt: 'Harshit Arora', // Alternative Site title for SEO
  siteTitleShort: 'Harshit', // short_name for manifest
  siteHeadline: 'Build something new Everyday', // Headline for schema.org JSONLD
  siteUrl: 'https://www.harshitarora.co/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'https://avatars.githubusercontent.com/hkarora', // Used for SEO and manifest
  siteDescription: 'Ada Mwone...ith Kand Nokk',
  author: 'Harshit Arora', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  /*   userTwitter: '@cara', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-163471955-1', */

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}

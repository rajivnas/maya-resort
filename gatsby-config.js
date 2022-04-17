/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://mayaresort.netlify.app",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Maya Resort`,
    description: `Maya Resort is one of the most renowned wedding venues in Howrah, located on Domjur - Amta road, making it most accessible and convenient for all your guests.  `,
    author: `@Kishore`,
    twitterUsername: "@kishorenaskar2",
    image: "/twitter-img.png",
    keywords: ["Pratham Milan Garden", "Pratham Milan banquet hall"],
    siteUrl,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}

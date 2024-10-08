/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dylan Travis - Portfolio`,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About Me',
        link: '/about',
      },
      {
        name: 'Resume',
        link: '/resume',
      }
    ],
    siteUrl: `https://www.dylantravis.net`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
   {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": `content`,
        "path": `./src/content/`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Crimson Text`,
            file: `https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap`,
          },
        ],
      },
    }
  ]
};
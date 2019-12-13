require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `loudflow`,
    description: `Loudflow Web Site`,
    author: `FarSimple Oy`,
  },
  plugins: [
    `gatsby-plugin-flow`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          'components': './components',
          'containers': './containers',
          'images': './images',
          'state': './state',
          'styles': './styles',
          'utils': './utils',
          static: {
            root: './public',
            alias: './static'
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `loudflow`,
        short_name: `loudflow`,
        start_url: `/what/`,
        icon: `src/images/logo/logo-orange.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/state/store",
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    }
  ]
};

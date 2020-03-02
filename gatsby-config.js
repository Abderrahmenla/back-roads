require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })
module.exports = {
  siteMetadata:{
    title:"BackRoads",
    description:"explore awesome worldwide tours and discover what makes each of them unique. Forget your daily routine & say yes to adventures",
    author:"@Abderrahmenlh",
    twitterUsername:"@AbderrahmenLah1",
    image:'/defaultBcg.jpeg',
    siteUrl:'https://back-roads.netlify.com'
  },
  plugins:[
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-playground`],
}

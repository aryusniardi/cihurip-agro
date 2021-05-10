module.exports = {
  siteMetadata: {
    title: `Cihurip Agro`,
    description: `CIHURIP AGRO,  merupakan UMKM yang berdiri sebagai wadah untuk mengakomodasi hasil riset dan pengembangan produk untuk mendukung usaha dibidang pertanian, sebagai bentuk partisipasi didalam mendukung program pangan nasional untuk  membantu para petani Menjaga & menaikkan hasil pertaniannya sehingga mampu meningkatkan kesejahteraannya.`,
    author: `Cihurip Agro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cihurip Agro`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/Logo - Cihurip Agro@4x.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

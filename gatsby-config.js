module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: { rule: { include: /assets/ } },
    },
  ],
};

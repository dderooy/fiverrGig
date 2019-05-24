module.exports = {
  siteMetadata: {
    title: "John Doe",
    author: "John Doe",
    description: "A Business Card Website",
    h1: "John Doe",
    h2: "A solid dude who gets things done",
    hicon: "icon fa-diamond",
    bio: " "
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'David DeRooy - Business Card',
        short_name: 'Business Card',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/page-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

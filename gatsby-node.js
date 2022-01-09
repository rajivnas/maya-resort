const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const roomTemplate = path.resolve(`./src/templates/room.js`)

  // Fetch items
  const res = await graphql(`
    {
      allContentfulRooms {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create page
  res.data.allContentfulRooms.edges.forEach(room => {
    createPage({
      component: roomTemplate,
      path: `/${room.node.slug}`,
      context: {
        slug: room.node.slug,
      },
    })
  })
}

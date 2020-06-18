const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
    {
      allDatoCmsPhoto(sort: {fields: galeriePhoto___createdAt}) {
        edges {
          node {
            id
            titreProjet
            creditLigne1
            creditLigne2
            creditLigne3
            creditLigne4
            creditLigne5
            creditLigne6
            slugProjet
            galeriePhoto {
              alt
              fluid {
                width
                height
                src
              }
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allDatoCmsPhoto.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slugProjet,
      component: blogPost,
      context: {
        slugProjet: post.node.slugProjet,
        creditLigne1: post.node.creditLigne1,
        creditLigne2: post.node.creditLigne2,
        creditLigne3: post.node.creditLigne3,
        creditLigne4: post.node.creditLigne4,
        creditLigne5: post.node.creditLigne5,
        creditLigne6: post.node.creditLigne6,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

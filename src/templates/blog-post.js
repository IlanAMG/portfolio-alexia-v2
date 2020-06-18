import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.datoCmsPhoto
  const siteTitle = data.site.siteMetadata.title
  // const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.galeriePhoto[0].alt}
      />
      <article>
        <section>
          {post.galeriePhoto.map((photo) => {
            return (
              <img alt={photo.alt} src={photo.fluid.src} />
            )
          })

          }
        </section>

      {/* <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slugPhoto: String!) {
    site {
      siteMetadata {
        title
      }
    }
    datoCmsPhoto(slugPhoto: {eq: $slugPhoto}) {
      id
      slugPhoto
      galeriePhoto {
        alt
        fluid {
          src
        }
      }
    }
  }
`

// Gatsby supports TypeScript natively!
import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import '../style/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Loading } from '../components/Loading/Loading';
import { onLoad } from '../../gatsby-browser';

const BlogIndex = ({ data, location }) => {
  const [loading, setLoading] = useState(false)
  const [pageLoad, setPageLoad] = useState(false)
  const [opacityLoading, setOpacityLoading] = useState(false)
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  useEffect(() => {
    if (onLoad) {
      setPageLoad(true)
        setTimeout(() => {
          setOpacityLoading(true)
        }, 3400)
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
  
        setTimeout(() => {
          setLoading(true)
          document.body.style.overflow = 'unset';
          document.body.style.height = 'auto';
        }, 3900)
    }
  }, [onLoad])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
        {
          !loading && pageLoad &&
          
          <Loading opacityLoading={opacityLoading} />
        }
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

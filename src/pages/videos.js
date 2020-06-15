import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Videos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
      <Layout location={location} title={siteTitle}>
        <SEO title="videos" />
          <h1>videos</h1>
      </Layout>
  )
}

export default Videos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
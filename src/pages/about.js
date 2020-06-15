import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="about" />
      <h1>about</h1>
    </Layout>
  )
}

export default about

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
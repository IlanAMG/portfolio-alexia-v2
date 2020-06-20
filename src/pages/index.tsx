// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"

import '../style/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PagePhotography } from '../components/PagePhotography/PagePhotography';
// import { PageNavigation } from '../components/PageNavigation/PageNavigation';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const projets = data.allDatoCmsPhoto
  return (
      <Layout location={location} title={siteTitle} >
        <SEO title="Portfolio" />
          <PagePhotography projets={projets} />
          {/* <PageNavigation /> */}
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
    allDatoCmsPhoto(sort: {fields: galeriePhoto___createdAt}) {
      edges {
        node {
          id
          slugProjet
          titreProjet
          creditLigne1
          principale {
            alt
            fluid(maxHeight: 800) {
              src
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageNavigation } from '../components/PageNavigation/PageNavigation';
import { PageVideos } from '../components/PageVideos/PageVideos';

const Videos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const projets = data.allDatoCmsVideo

  return (
      <Layout location={location} title={siteTitle}>
        <SEO title="videos" />
          <PageVideos projets={projets} />
          <PageNavigation />
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
    allDatoCmsVideo {
      edges {
        node {
          id
          creditLigne1
          titreProjet
          lienVideo {
            thumbnailUrl
            providerUid
          }
          principale {
            uploadId {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
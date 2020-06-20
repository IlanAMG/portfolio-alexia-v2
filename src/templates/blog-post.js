import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageTemplate } from '../components/PageTemplate/PageTemplate';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.datoCmsPhoto
  const siteTitle = data.site.siteMetadata.title
  const [galerie, setGalerie] = useState([])
  const { previous, next } = pageContext

  const loadGalerie = () => {
    let cloneGalerie = [...galerie]
    if (post.galeriePhoto[0].fluid !== undefined) {
      let lengthGalerie = post.galeriePhoto.length

      post.galeriePhoto.map((photo, id) => {
        if (photo.fluid.height >  photo.fluid.width && lengthGalerie !== 2) {
          if (id === 0) { //vertical
            cloneGalerie.push('100%')
          } else if (id === 4 && lengthGalerie === 5) {
            cloneGalerie.push('100%')
          } else if (id === 7 && lengthGalerie === 8) {
            cloneGalerie.push('100%')
          } else {
            if (cloneGalerie[id - 1] === '100%') {
              cloneGalerie.push('50%')
            } else if (cloneGalerie[id - 1] === '50%' && cloneGalerie[id - 2] === '100%') {
              cloneGalerie.push('50%')
            } else {
              cloneGalerie.push('100%')
            }
          } 
        } else { //horizontal
          cloneGalerie.push('100%')
        }
      })
    }
    setGalerie(cloneGalerie)
  }

  useEffect(() => {
    loadGalerie()
  }, [post.galeriePhoto[0].fluid])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.titreProjet}
      />
      <PageTemplate 
        galerie={galerie} 
        previous={previous} 
        next={next} 
        post={post}
        creditLigne1={post.creditLigne1}
        creditLigne2={post.creditLigne2}
        creditLigne3={post.creditLigne3}
        creditLigne4={post.creditLigne4}
        creditLigne5={post.creditLigne5}
        creditLigne6={post.creditLigne6} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slugProjet: String!) {
    site {
      siteMetadata {
        title
      }
    }
    datoCmsPhoto(slugProjet: {eq: $slugProjet}) {
      id
      creditLigne1
      creditLigne2
      creditLigne3
      creditLigne4
      creditLigne5
      creditLigne6
      titreProjet
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
`

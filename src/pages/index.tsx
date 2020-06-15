// Gatsby supports TypeScript natively!
import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

import '../style/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Loading } from '../components/Loading/Loading';
import { PagePhotography } from '../components/PagePhotography/PagePhotography';
import { PageNavigation } from '../components/PageNavigation/PageNavigation';
import { onLoad } from '../../gatsby-browser';
import Context from '../utils/context';

const BlogIndex = ({ data, location }) => {
  const [loadingFinish, setLoadingFinish] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pageLoad, setPageLoad] = useState(false)
  const [opacityLoading, setOpacityLoading] = useState(false)
  const [openNavTransiFinish, setOpenNavTransiFinish] = useState(false)
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  let timer = useRef(null)

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


  useEffect(() => {
    setTimeout(() => {
        setLoadingFinish(true)
    }, 4500)
  }, [])

  useEffect(() => {
    if (navIsOpen) {
        timer.current = setTimeout(() => {
          setOpenNavTransiFinish(true)
        }, 1000)
    } else {
        clearTimeout(timer.current)
          setOpenNavTransiFinish(false);
    }
}, [navIsOpen])

  return (
    <Context.Provider value={{navIsOpen, setNavIsOpen, loadingFinish }}>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
          {
            !loading && pageLoad &&
            <Loading opacityLoading={opacityLoading} />
          }
          {
            pageLoad && !openNavTransiFinish &&
            <PagePhotography />
          }
          {
            openNavTransiFinish &&
            <PageNavigation />
          }
      </Layout>
    </Context.Provider>
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

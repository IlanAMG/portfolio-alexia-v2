import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Context from '../utils/context';

const Videos = ({ data, location }) => {
  // const [loadingFinish, setLoadingFinish] = useState(false)
  // const [navIsOpen, setNavIsOpen] = useState(false)
  // const [openNavTransiFinish, setOpenNavTransiFinish] = useState(false)
  const siteTitle = data.site.siteMetadata.title

  // let timer = useRef(null)

  // useEffect(() => {
  //   if (navIsOpen) {
  //       timer.current = setTimeout(() => {
  //         setOpenNavTransiFinish(true)
  //       }, 1000)
  //   } else {
  //       clearTimeout(timer.current)
  //         setOpenNavTransiFinish(false);
  //   }
  // }, [navIsOpen])
  
  // useEffect(() => {
  //   setTimeout(() => {
  //       setLoadingFinish(true)
  //   }, 1000)
  // }, [])

  return (
    <Context.Provider >
      {/* <Layout location={location} title={siteTitle}>
        <SEO title="videos" /> */}
        {/* {!openNavTransiFinish && */}
          <h1>videos</h1>
        {/* } */}
      {/* </Layout> */}
    </Context.Provider>
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
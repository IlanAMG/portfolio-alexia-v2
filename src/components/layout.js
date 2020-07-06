import React, { useEffect, useState, useRef, useContext } from "react"

import { Header } from "./Header/Header";
import { Loading } from '../components/Loading/Loading';
import { onLoad } from '../../gatsby-browser';
import { PageNavigation } from './PageNavigation/PageNavigation';
import Context from '../utils/context';

import { GlobalStateContext, GlobalDispatchContext } from '../utils/GlobalContextProvider';

const Layout = ({ location, title, children }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const [loading, setLoading] = useState(false)
  const [pageLoad, setPageLoad] = useState(false)
  const [opacityLoading, setOpacityLoading] = useState(false)
  const [loadingFinish, setLoadingFinish] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [openNavTransiFinish, setOpenNavTransiFinish] = useState(false)

  const rootPath = `${__PATH_PREFIX__}/`

  let timer = useRef(null)

  if (location.pathname === rootPath) {
    title = 'PHOTOGRAPHY'
  } else if (location.pathname === '/about') {
    title = 'ABOUT'
  } else if (location.pathname === '/videos') {
    title = 'VIDEOS'
  } else {
    title = ''
  }

  useEffect(() => {
    if (onLoad && state.theFirstTimeLoadPassed === false) {
      setPageLoad(true)
      console.log('load')
        setTimeout(() => {
          setOpacityLoading(true)
        }, 3400)
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
  
        setTimeout(() => {
          setLoading(true)
          document.body.style.overflow = 'unset';
          document.body.style.height = 'auto';
          dispatch({ type: 'IT_IS_PASSED'})
        }, 3900)
    } else if (state.theFirstTimeLoadPassed) {
      setPageLoad(true)
    }
  }, [onLoad])

  useEffect(() => {
    if (state.theFirstTimeLoadPassed === false) {
      setTimeout(() => {
        setLoadingFinish(true)
      }, 4500)
    } else {
        setLoadingFinish(true)
    }
  }, [])

  useEffect(() => {
    if (navIsOpen) {
        timer.current = setTimeout(() => {
          setOpenNavTransiFinish(true)
        }, 600)
    } else {
        clearTimeout(timer.current)
        setOpenNavTransiFinish(false);
    }
}, [navIsOpen])

  return (
    <Context.Provider value={{location, pageLoad, setLoadingFinish, navIsOpen, setNavIsOpen, loadingFinish, openNavTransiFinish }} >
      <Header title={title} location={location} rootPath={rootPath} />
      {/* {
        !loading && pageLoad && state.theFirstTimeLoadPassed === false && */}
        <Loading opacityLoading={opacityLoading} />
      {/* } */}
      <main>{children}</main>
      {openNavTransiFinish &&
      <PageNavigation />}
    </Context.Provider>
  )
}

export default Layout

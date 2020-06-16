import React, { useEffect, useState, useRef } from "react"

import { Header } from "./Header/Header";
import Context from '../utils/context';

const Layout = ({ location, title, children }) => {
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
    if (location.pathname === rootPath) {
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
    <Context.Provider value={{setLoadingFinish, navIsOpen, setNavIsOpen, loadingFinish, openNavTransiFinish }} >
      <Header title={title} location={location} rootPath={rootPath} />
      <main>{children}</main>
    </Context.Provider>
  )
}

export default Layout

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
    title = ''
  } else if (location.pathname === '/about') {
    title = 'ABOUT'
  } else if (location.pathname === '/videos') {
    title = 'VIDEOS'
  } else {
    title = ''
  }

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
    <Context.Provider value={{navIsOpen, setNavIsOpen, loadingFinish, openNavTransiFinish }} >
      <Header />
      <main>{children}</main>
    </Context.Provider>
  )
}

export default Layout

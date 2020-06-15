import React from "react"

import { Header } from "./Header/Header";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  if (location.pathname === rootPath) {
    title = ''
  } else if (location.pathname === '/about') {
    title = 'ABOUT'
  } else if (location.pathname === '/videos') {
    title = 'VIDEOS'
  } else {
    title = ''
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout

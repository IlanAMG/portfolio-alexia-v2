import React from "react"

import Context from '../utils/context';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  if (location.pathname === rootPath) {
    title = ''
  } else if (location.pathname === '/about') {
    title = 'ABOUT'
  } else if (location.pathname === '/videos'){
    title = 'VIDEOS'
  } else {
    title = ''
  }

  return (
    <Context.Provider value={{}}>
      <div>
        <header></header>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </Context.Provider>
  )
}

export default Layout

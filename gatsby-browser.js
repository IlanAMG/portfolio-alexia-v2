
import React from 'react'
import GlobalContextProvider from './src/utils/GlobalContextProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
            { element }
        </GlobalContextProvider>
    )
  }

export const onLoad = () => {
      window.onload = () => { 
        return true 
      }
    }
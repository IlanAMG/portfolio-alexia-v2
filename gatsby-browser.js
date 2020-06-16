
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
      if (window) {
        window.onload = () => { 
          return true ;
        }
      } else {
        return false;
      }
    }
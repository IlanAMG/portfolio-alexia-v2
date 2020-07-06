import React, { useContext, useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import _ from 'lodash'

import StyledPageNavigation from './StyledPageNavigation'
import Context from '../../utils/context';

export const PageNavigation = () => {
    const { first, second, third, fourth } = useStaticQuery(
        graphql`
            query {
                first:allDatoCmsPhoto(limit: 5) {
                    edges {
                        node {
                            principale {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                }
                second:allDatoCmsPhoto(skip: 5, sort: {fields: principale___size, order: ASC}) {
                    edges {
                      node {
                        principale {
                          fluid {
                            src
                          }
                        }
                      }
                    }
                  }
                third:allDatoCmsPhoto(limit: 5, sort: {fields: principale___createdAt}) {
                    edges {
                        node {
                            principale {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                }
                fourth:allDatoCmsPhoto(limit: 5, sort: {fields: galeriePhoto___colors, order: ASC}) {
                    edges {
                      node {
                        principale {
                          fluid {
                            src
                          }
                        }
                      }
                    }
                  }
            }
        `)

    const { openNavTransiFinish, setNavIsOpen, navIsOpen, location } = useContext(Context)
    const [transiTo, setTransiTo] = useState(null)
    const [top, setTop] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        const direction = e.target.innerText
        const path = e.currentTarget.getAttribute('value')
        setTransiTo(direction)
        if (location.pathname === path) {
            window.setTimeout(() => {
                setNavIsOpen(false)
            }, 600)
        } else {
            window.setTimeout(() => {
                navigate(path)
            }, 600)
        }
    }

    useEffect(() => {
        const top = window.innerHeight * 0.21
        setTop(top)
        window.scrollTo({
            top,
        })
    }, [openNavTransiFinish]);

    useEffect(() => {
        if (navIsOpen === false) {
            setTransiTo(null)
        }
    }, [navIsOpen])
    
    return (
        openNavTransiFinish && 
        <StyledPageNavigation
            transiTo={transiTo}
            top={top}
        >
            <nav>
                <ul>
                    <li className={`container-lien`} >
                        <div className='wrapper-link'>
                            <a onClick={handleClick} value='/'>PHOTOGRAPHY</a>
                            <div className='bg-hover photo'/>
                        </div>
                    </li>
                    <li className={`container-lien`}>
                        <div className='wrapper-link'>
                            <a onClick={handleClick} value='/videos'>VIDEOS</a>
                            <div className='bg-hover video'/>
                        </div>
                    </li>
                    <li className={`container-lien`} >
                        <div className='wrapper-link'>
                            <a onClick={handleClick} value='/about'>ABOUT</a>
                            <div className='bg-hover about'/>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className='container-galerie'>
                <div className='filter' />
                <div className='row'>
                    {second.edges.map(({node:photo}, i) => {
                        return (
                            <div className='wrapper-img' key={i}>
                                <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                            </div>
                        )
                    })}
                </div>
                <div className='row'>
                    {first.edges.map(({node:photo}, i) => {
                        return (
                            <div className='wrapper-img' key={i}>
                                <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                            </div>
                        )
                    })}
                </div>
                <div className='row'>
                    {second.edges.map(({node:photo}, i) => {
                        return (
                            <div className='wrapper-img' key={i}>
                                <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                            </div>
                        )
                    })}
                </div>
                <div className='row'>
                    {third.edges.map(({node:photo}, i) => {
                        return (
                            <div className='wrapper-img' key={i}>
                                <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                            </div>
                        )
                    })}
                </div>
                <div className='row'>
                    {fourth.edges.map(({node:photo}, i) => {
                        return (
                            <div className='wrapper-img' key={i}>
                                <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                            </div>
                        )
                    })}
                </div>
                <div className='row'>
                    {first.edges.map(({node:photo}, i) => {
                        return (
                            <div className='wrapper-img' key={i}>
                                <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                            </div>
                        )
                    })}
                </div>
                <div className='row'>
                    {second.edges.map(({node:photo}, i) => {
                        return (
                            <div className='wrapper-img' key={i}>
                                <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </StyledPageNavigation>
    )
}

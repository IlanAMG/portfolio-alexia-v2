import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import _ from 'lodash'

import StyledPageNavigation from './StyledPageNavigation'
import { Link } from 'gatsby'
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
    const [isSelect, setIsSelect] = useState([true, false, false])

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

    const scrollToRef = (e) => {
        e.persist()
        const toPhoto = window.innerHeight * 0.21
        const toVideo = window.innerHeight * 0.71
        const toAbout = window.innerHeight * 1.22
        const isScrollingDown = Math.sign(e.deltaY);
        
        let cloneIsSelect = [...isSelect]

        if (cloneIsSelect[0] ) {
            cloneIsSelect[0] = false
            cloneIsSelect[1] = true
            setIsSelect(cloneIsSelect)
            window.scrollTo({
                top: toVideo,
                behavior: 'smooth'
            })
        } else if (cloneIsSelect[2]) {
            cloneIsSelect[2] = false
            cloneIsSelect[1] = true
            setIsSelect(cloneIsSelect)
            window.scrollTo({
                top: toVideo,
                behavior: 'smooth'
            })
        } else if (cloneIsSelect[1] && isScrollingDown > 0) {
            cloneIsSelect[1] = false
            cloneIsSelect[0] = true
            setIsSelect(cloneIsSelect)
            window.scrollTo({
                top: toPhoto,
                behavior: 'smooth'
            })
        } else if (cloneIsSelect[1] && isScrollingDown < 0) {
            cloneIsSelect[1] = false
            cloneIsSelect[2] = true
            setIsSelect(cloneIsSelect)
            window.scrollTo({
                top: toAbout,
                behavior: 'smooth'
            })
        }

    }
    const preventWheel = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        if (navIsOpen === false) {
            setTransiTo(null)
        }
    }, [navIsOpen])
    
    useEffect(() => {
        const top = window.innerHeight * 0.21
        window.scrollTo({
            top,
        })
    }, [openNavTransiFinish]);

    useEffect(() => {
        window.addEventListener('wheel', preventWheel, {passive: false})
    }, [])

    return (
        openNavTransiFinish && 
        <StyledPageNavigation transiTo={transiTo} onWheel={_.throttle(scrollToRef,200)}>
            <nav>
                <ul>
                    <li className={`container-lien ${isSelect[0] ? 'select' : null}`} >
                        <Link onClick={handleClick} value='/'>PHOTOGRAPHY</Link>
                    </li>
                    <li className={`container-lien ${isSelect[1] ? 'select' : null}`}>
                        <Link onClick={handleClick} value='/videos'>VIDEOS</Link>
                    </li>
                    <li className={`container-lien ${isSelect[2] ? 'select' : null}`} >
                        <Link onClick={handleClick} value='/about'>ABOUT</Link>
                    </li>
                </ul>
            </nav>
            <div className='container-galerie'>
                <div className='filter' />
                {second.edges.map(({node:photo}) => {
                    return (
                        <div className='wrapper-img'>
                            <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                        </div>
                    )
                })}
                {first.edges.map(({node:photo}) => {
                    return (
                        <div className='wrapper-img'>
                            <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                        </div>
                    )
                })}
                {second.edges.map(({node:photo}) => {
                    return (
                        <div className='wrapper-img'>
                            <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                        </div>
                    )
                })}
                {third.edges.map(({node:photo}) => {
                    return (
                        <div className='wrapper-img'>
                            <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                        </div>
                    )
                })}
                {fourth.edges.map(({node:photo}) => {
                    return (
                        <div className='wrapper-img'>
                            <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                        </div>
                    )
                })}
                {first.edges.map(({node:photo}) => {
                    return (
                        <div className='wrapper-img'>
                            <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                        </div>
                    )
                })}
                {second.edges.map(({node:photo}) => {
                    return (
                        <div className='wrapper-img'>
                            <img className='img' alt='galerie' src={photo.principale.fluid.src} />
                        </div>
                    )
                })}
            </div>
        </StyledPageNavigation>
    )
}

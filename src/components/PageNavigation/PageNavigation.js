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
    const [isSelect, setIsSelect] = useState([true, false, false])
    const [isWheel, setIsWheel] = useState(false)
    
    let touchStart = useRef(null)
    let touchEnd = useRef(null)

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

    const handleTouchStart = (e) => {
        touchStart.current = e.changedTouches[0].clientY
    }
    const handleTouchEnd = (e) => {
        touchEnd.current = e.changedTouches[0].clientY
        scrollToRefMobile()
    }

    const scrollToRefMobile = () => {
        const toPhoto = window.innerHeight * 0.21
        const toVideo = window.innerHeight * 0.71
        const toAbout = window.innerHeight * 1.22

        let cloneIsSelect = [...isSelect]
        if (touchStart.current !== null && touchEnd.current !== null) {
            if (cloneIsSelect[0] && Math.round(toPhoto) === window.pageYOffset && touchStart.current > touchEnd.current) {
                window.scrollTo({
                    top: toVideo,
                    behavior: 'smooth'
                })
                cloneIsSelect[0] = false
                cloneIsSelect[1] = true
            } else if (cloneIsSelect[2] && Math.round(toAbout) === window.pageYOffset && touchStart.current < touchEnd.current) {
                window.scrollTo({
                    top: toVideo,
                    behavior: 'smooth'
                })
                cloneIsSelect[2] = false
                cloneIsSelect[1] = true
            } else if (cloneIsSelect[1] && Math.round(toVideo) === window.pageYOffset && touchStart.current < touchEnd.current) {
                window.scrollTo({
                    top: toPhoto,
                    behavior: 'smooth'
                })
                cloneIsSelect[1] = false
                cloneIsSelect[0] = true
            } else if (cloneIsSelect[1] && Math.round(toVideo) === window.pageYOffset && touchStart.current > touchEnd.current) {
                window.scrollTo({
                    top: toAbout,
                    behavior: 'smooth'
                })
                cloneIsSelect[1] = false
                cloneIsSelect[2] = true
            }
            setIsSelect(cloneIsSelect)
            touchStart.current = null
            touchEnd.current = null
        }
    }

    const scrollToRef = (deltaY) => {
        const toPhoto = window.innerHeight * 0.21
        const toVideo = window.innerHeight * 0.71
        const toAbout = window.innerHeight * 1.22
        const isScrollingDown = Math.sign(deltaY);
        let cloneIsSelect = [...isSelect]
        if (isWheel === false) {
            if (cloneIsSelect[0] && isScrollingDown > 0 && Math.round(toPhoto) === window.pageYOffset) {
                window.scrollTo({
                    top: toVideo,
                    behavior: 'smooth'
                })
                cloneIsSelect[0] = false
                cloneIsSelect[1] = true
            } else if (cloneIsSelect[2] && isScrollingDown < 0 && Math.round(toAbout) === window.pageYOffset) {
                window.scrollTo({
                    top: toVideo,
                    behavior: 'smooth'
                })
                cloneIsSelect[2] = false
                cloneIsSelect[1] = true
            } else if (cloneIsSelect[1] && isScrollingDown < 0 && Math.round(toVideo) === window.pageYOffset) {
                window.scrollTo({
                    top: toPhoto,
                    behavior: 'smooth'
                })
                cloneIsSelect[1] = false
                cloneIsSelect[0] = true
            } else if (cloneIsSelect[1] && isScrollingDown > 0 && Math.round(toVideo) === window.pageYOffset) {
                window.scrollTo({
                    top: toAbout,
                    behavior: 'smooth'
                })
                cloneIsSelect[1] = false
                cloneIsSelect[2] = true
            }
            setIsSelect(cloneIsSelect)
            setIsWheel(true)
        }
    }

    const debouncedUpdate = _.throttle(value => scrollToRef(value), 10);
    
    const preventWheel = (e) => {
        e.preventDefault()
    }

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }
    
    const detectActiveWheel = () => {
        if (isSelect[0] && Math.round(window.innerHeight * 0.21) === window.pageYOffset) {
            setIsWheel(false)
        } else if (isSelect[1] && Math.round(window.innerHeight * 0.71) === window.pageYOffset) {
            setIsWheel(false)
        } else if (isSelect[2] && Math.round(window.innerHeight * 1.22) === window.pageYOffset) {
            setIsWheel(false)
        } else {
            setIsWheel(true)
        }
    }

    useInterval(detectActiveWheel, 1100)

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
        if (navIsOpen) {
            window.addEventListener('wheel', preventWheel, {passive: false})
            window.addEventListener('touchmove', preventWheel, {passive: false})
        } else {
            window.removeEventListener('wheel', preventWheel)
            window.removeEventListener('touchmove', preventWheel)
        }
    }, [navIsOpen, openNavTransiFinish])

    useEffect(() => {
        return () => window.removeEventListener('wheel', preventWheel)
    }, [])

    useEffect(() => {
        return () => window.removeEventListener('touchmove', preventWheel)
    }, [])

    return (
        openNavTransiFinish && 
        <StyledPageNavigation
            transiTo={transiTo}
            onWheel={({ deltaY }) => debouncedUpdate(deltaY)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aboutSelect={isSelect[2]} 
        >
            <nav>
                <ul>
                    <li className={`container-lien ${isSelect[0] ? 'select' : null}`} >
                        <a onClick={handleClick} value='/'>PHOTOGRAPHY</a>
                    </li>
                    <li className={`container-lien ${isSelect[1] ? 'select' : null}`}>
                        <a onClick={handleClick} value='/videos'>VIDEOS</a>
                    </li>
                    <li className={`container-lien ${isSelect[2] ? 'select' : null}`} >
                        <a onClick={handleClick} value='/about'>ABOUT</a>
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

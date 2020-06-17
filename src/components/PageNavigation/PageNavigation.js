import React, { useContext, useState, useEffect } from 'react'
import { navigate } from "@reach/router" 
import StyledPageNavigation from './StyledPageNavigation'
import { Link } from 'gatsby'
import Context from '../../utils/context';

export const PageNavigation = () => {
    const { openNavTransiFinish, setNavIsOpen, navIsOpen, location } = useContext(Context)
    const [transiTo, setTransiTo] = useState(null)

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
        if (navIsOpen === false) {
            setTransiTo(null)
        }
    }, [navIsOpen])

    return (
        openNavTransiFinish && 
        <StyledPageNavigation transiTo={transiTo}>
            <div className='container-lien' >
                <Link onClick={handleClick} value='/'>PHOTOGRAPHY</Link>
            </div>
            <div className='container-lien' >
                <Link onClick={handleClick} value='/videos'>VIDEOS</Link>
            </div>
            <div className='container-lien' >
                <Link onClick={handleClick} value='/about'>ABOUT</Link>
            </div>
        </StyledPageNavigation>
    )
}

import React, { useContext } from 'react'
import StyledPageNavigation from './StyledPageNavigation'
import { Link } from 'gatsby'
import Context from '../../utils/context';

export const PageNavigation = () => {
    const { openNavTransiFinish, setNavIsOpen } = useContext(Context)

    const handleClick = () => {
        setNavIsOpen(false)
    }

    return (
        openNavTransiFinish && 
        <StyledPageNavigation>
            <div className='container-lien' >
                <Link onClick={handleClick} to='/'>PHOTOGRAPHY</Link>
            </div>
            <div className='container-lien' >
                <Link onClick={handleClick} to='/videos'>VIDEOS</Link>
            </div>
            <div className='container-lien' >
                <Link onClick={handleClick} to='/about'>ABOUT</Link>
            </div>
        </StyledPageNavigation>
    )
}

import React from 'react'
import StyledPageNavigation from './StyledPageNavigation'
import { Link } from 'gatsby'

export const PageNavigation = () => {
    return (
        <StyledPageNavigation>
            <div>
                <Link to='/'>PHOTOGRAPHY</Link>
            </div>
            <div>
                <Link to='/videos'>VIDEOS</Link>
            </div>
            <div>
                <Link to='/about'>ABOUT</Link>
            </div>
        </StyledPageNavigation>
    )
}

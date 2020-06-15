import React, { useContext } from 'react'
import StyledPageNavigation from './StyledPageNavigation'
import { Link } from 'gatsby'
import Context from '../../utils/context';

export const PageNavigation = () => {
    const { openNavTransiFinish } = useContext(Context)
    return (
        openNavTransiFinish && 
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

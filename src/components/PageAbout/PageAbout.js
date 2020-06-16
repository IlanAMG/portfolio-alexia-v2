import React, { useContext } from 'react'

import StyledPageAbout from './StyledPageAbout';
import Context from '../../utils/context';

export const PageAbout = () => {
    const { openNavTransiFinish } = useContext(Context)
    
    return (
        !openNavTransiFinish &&
        <StyledPageAbout>
            FUTURE PAGE ABOUT
        </StyledPageAbout>
    )
}

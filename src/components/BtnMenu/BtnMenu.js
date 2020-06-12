import React, { useState } from 'react'

import StyledBtnMenu from './StyledBtnMenu'

export const BtnMenu = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <StyledBtnMenu onClick={() => setOpenNav(openNav => !openNav)}>
            <div className={openNav ? 'wrapper-menu wrapper-croix' : 'wrapper-menu'}>
                <div className='ligne' />
            </div>
        </StyledBtnMenu>
    )
}

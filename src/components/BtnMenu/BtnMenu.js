import React, { useState } from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import StyledBtnMenu from './StyledBtnMenu'

export const BtnMenu = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={3900} delayedCall once>
            {({ isVisible }) => (
                <Spring
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateY(0)"
                            : "translateY(-50px)",
                    }}>
                    {(props) => (
                        <StyledBtnMenu style={{ ...props }} onClick={() => setOpenNav(openNav => !openNav)}>
                            <div className={openNav ? 'wrapper-menu wrapper-croix' : 'wrapper-menu'}>
                                <div className='ligne' />
                            </div>
                        </StyledBtnMenu>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
    )
}

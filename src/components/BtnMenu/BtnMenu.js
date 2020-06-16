import React, { useContext } from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import StyledBtnMenu from './StyledBtnMenu'
import Context from '../../utils/context';

export const BtnMenu = ({ title, theFirstTimeLoadPassed }) => {
    const { navIsOpen, setNavIsOpen } = useContext(Context)
    return (
        <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={theFirstTimeLoadPassed === false ? 3800 : 200} delayedCall once>
            {({ isVisible }) => (
                <Spring
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateY(0)"
                            : "translateY(-50px)",
                    }}>
                    {(props) => (
                        <StyledBtnMenu style={{ ...props }} onClick={() => setNavIsOpen(navIsOpen => !navIsOpen)}>
                            <div className={navIsOpen ? 'wrapper-menu wrapper-croix' : 'wrapper-menu'}>
                                <div className='ligne' />
                            </div>
                        </StyledBtnMenu>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
    )
}

import React from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import { BtnMenu } from '../BtnMenu/BtnMenu';
import StyledHeader from './StyledHeader'

export const Header = () => {
    return (
        <StyledHeader>
            <div className='circle' />
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
                            <div style={{ ...props }} className='container-title'>
                                <h1>Alexia Amzallag</h1><h2>Photography</h2>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <BtnMenu />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={3600} delayedCall once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 0.5 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(-50px)",
                        }}>
                        {(props) => (
                            <div style={{ ...props }} className='separator' />
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </StyledHeader>
    )
}

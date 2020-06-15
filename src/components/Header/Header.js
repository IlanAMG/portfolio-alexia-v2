import React, { useContext } from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import { BtnMenu } from '../BtnMenu/BtnMenu';
import StyledHeader from './StyledHeader'
import Context from '../../utils/context';

export const Header = () => {
    const { navIsOpen, loadingFinish } = useContext(Context)

    return (
        <StyledHeader navIsOpen={navIsOpen} loadingFinish={loadingFinish}>
            <div className='circle transiOff' />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} delayedCall once>
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
                                <h1>Alexia Amzallag</h1><h2 className='transiOff'>Photography</h2>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <BtnMenu />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 0.5 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(-50px)",
                        }}>
                        {(props) => (
                            <div style={{ ...props }} className='separator transiOff' />
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </StyledHeader>
    )
}

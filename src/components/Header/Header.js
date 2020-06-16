import React, { useContext, useEffect } from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import { BtnMenu } from '../BtnMenu/BtnMenu';
import StyledHeader from './StyledHeader'
import Context from '../../utils/context';

export const Header = ({ title }) => {
    const { navIsOpen, loadingFinish, setLoadingFinish } = useContext(Context)

    return (
        <StyledHeader navIsOpen={navIsOpen} loadingFinish={loadingFinish} >
            <div className='circle transiOff' />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={title === 'PHOTOGRAPHY' ? 3600 : 0} delayedCall once>
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
                                <h1>Alexia Amzallag</h1><h2 className='transiOff'>{title}</h2>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <BtnMenu title={title} />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={title === 'PHOTOGRAPHY' ? 3600 : 0} delayedCall once>
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

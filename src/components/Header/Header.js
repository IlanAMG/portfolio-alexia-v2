import React, { useContext } from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import { BtnMenu } from '../BtnMenu/BtnMenu';
import StyledHeader from './StyledHeader'
import Context from '../../utils/context';
import { GlobalStateContext } from '../../utils/GlobalContextProvider';

export const Header = ({ title }) => {
    const { navIsOpen, loadingFinish } = useContext(Context)
    const state = useContext(GlobalStateContext)

    return (
        <StyledHeader navIsOpen={navIsOpen} loadingFinish={loadingFinish} >
            <div className='circle transiOff' />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={title === 'PHOTOGRAPHY' && state.theFirstTimeLoadPassed === false ? 3600 : 0} delayedCall once>
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
            <BtnMenu title={title} theFirstTimeLoadPassed={state.theFirstTimeLoadPassed}  />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={title === 'PHOTOGRAPHY' && state.theFirstTimeLoadPassed === false ? 3600 : 0} delayedCall once>
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

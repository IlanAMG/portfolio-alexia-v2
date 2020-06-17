import React, { useContext, useRef, useEffect, useState } from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import { BtnMenu } from '../BtnMenu/BtnMenu';
import StyledHeader from './StyledHeader'
import Context from '../../utils/context';
import { GlobalStateContext } from '../../utils/GlobalContextProvider';
import { useScrollDirection } from '../../utils/useScrollDirection';

export const Header = ({ title }) => {
    const { navIsOpen, loadingFinish } = useContext(Context)
    const state = useContext(GlobalStateContext)
    let direction = useRef('')
    const directionScroll = useScrollDirection()
    const [disapearHeader, setDisapearHeader] = useState(false)

    const getYOffset = () => {
        if (window.pageYOffset > 100 && direction.current === 'down') {
            setDisapearHeader(true)
        } else if (direction.current === 'up')  {
            setDisapearHeader(false)
        }
    }

    useEffect(() => {
        direction.current = directionScroll
      }, [directionScroll])

    useEffect(() => {
        if (navIsOpen === false) {
            window.addEventListener("scroll", getYOffset, {passive: true})
        }
    }, [navIsOpen])
    useEffect(() => {
        if (navIsOpen) {
            window.removeEventListener("scroll", getYOffset);
        }
        return () => window.removeEventListener("scroll", getYOffset);
    }, [navIsOpen])

    return (
        <StyledHeader navIsOpen={navIsOpen} loadingFinish={loadingFinish} disapearHeader={disapearHeader} >
            <div className='circle transiOff' />
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={state.theFirstTimeLoadPassed === false ? 3600 : 0} delayedCall once>
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
            <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={state.theFirstTimeLoadPassed === false ? 3600 : 0} delayedCall once>
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

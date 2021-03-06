import React, { useContext, useRef, useEffect, useState } from 'react'
import { Spring } from "react-spring/renderprops";
import { Link } from 'gatsby';

import VisibilitySensor from '../../utils/VisibilitySensor';
import { BtnMenu } from '../BtnMenu/BtnMenu';
import StyledHeader from './StyledHeader'
import Context from '../../utils/context';
import { GlobalStateContext } from '../../utils/GlobalContextProvider';
import { useScrollDirection } from '../../utils/useScrollDirection';

export const Header = ({ title, location }) => {
    const { navIsOpen, loadingFinish } = useContext(Context)
    const state = useContext(GlobalStateContext)
    let direction = useRef('')
    const directionScroll = useScrollDirection()
    const [disapearHeader, setDisapearHeader] = useState(false)
    const [colorCircle, setColorCircle] = useState('linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);')

    const getYOffset = () => {
        if (window.pageYOffset > 100 && direction.current === 'down') {
            setDisapearHeader(true)
        } else if (direction.current === 'up')  {
            setDisapearHeader(false)
        }
    }

    useEffect(() => {
        console.log(location.pathname)
        if (location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/videos') {
            setColorCircle('linear-gradient(180deg, #D1B4FF 0%, rgba(255, 255, 255, 0) 100%);')
        } else {
            setColorCircle('linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);')
        }
      }, [location.pathname])

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
        <StyledHeader colorCircle={colorCircle} navIsOpen={navIsOpen} loadingFinish={loadingFinish} disapearHeader={disapearHeader} >
            <div className='circle transiOff'/>
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
                                <Link to='/' ><h1>Alexia Amzallag</h1></Link><h2 className='transiOff'>{title}</h2>
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

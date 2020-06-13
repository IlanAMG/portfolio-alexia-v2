import React from 'react'
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import StyledContainerArrowNav from './StyledContainerArrowNav'

export const ContainerArrowNav = ({ handleClickNext, handleClickPrev }) => {
    return (
        <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={3900} delayedCall once>
            {({ isVisible }) => (
                <Spring
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateY(0)"
                            : "translateY(50px)",
                    }}>
                    {(props) => (
                        <StyledContainerArrowNav style={{ ...props }}>
                            <svg onClick={() => handleClickPrev(0.8)} width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0.999999L1 18L20 35" stroke="#121212" />
                            </svg>
                            <svg onClick={() => handleClickNext(1.2)} width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 35L20 18L1 0.999999" stroke="#121212" />
                            </svg>
                        </StyledContainerArrowNav>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
    )
}

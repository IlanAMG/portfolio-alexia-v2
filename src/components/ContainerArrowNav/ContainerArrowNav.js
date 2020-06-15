import React from 'react'

import StyledContainerArrowNav from './StyledContainerArrowNav'

export const ContainerArrowNav = ({ handleClickNext, handleClickPrev, navIsOpen, loadingFinish }) => {
    return (
        <StyledContainerArrowNav navIsOpen={navIsOpen} loadingFinish={loadingFinish} >
            <svg onClick={() => handleClickPrev(0.8)} width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0.999999L1 18L20 35" stroke="#121212" />
            </svg>
            <svg onClick={() => handleClickNext(1.2)} width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 35L20 18L1 0.999999" stroke="#121212" />
            </svg>
        </StyledContainerArrowNav>
    )
}

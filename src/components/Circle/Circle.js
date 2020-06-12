import React from 'react'
import StyledCircle from './StyledCircle'

export const Circle = ({ circleWidth, circleHeight, url, num }) => {

    return (
        <StyledCircle width={circleWidth} height={circleHeight} num={num} url={url} >
            <img alt='buble' src={url} />
            <img alt='filtre' className='filtre' />
        </StyledCircle>
    )
}

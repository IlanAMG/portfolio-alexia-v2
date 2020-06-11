import React from 'react'
import StyledCircle from './StyledCircle'

export const Circle = ({ circleWidth, circleHeight, url, num, children }) => {

    return (
        <StyledCircle width={circleWidth} height={circleHeight} num={num} url={url} >
            <img alt='bulle photo' src={url} />
            <img className='filtre' />
        </StyledCircle>
    )
}

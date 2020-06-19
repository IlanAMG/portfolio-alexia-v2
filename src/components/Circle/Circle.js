import React from 'react'
import StyledCircle from './StyledCircle'
import Img from 'gatsby-image'

export const Circle = ({ circleWidth, circleHeight, url, num }) => {

    return (
        <StyledCircle width={circleWidth} height={circleHeight} num={num} url={url} >
            <Img className='img' alt='buble' fluid={url} />
            <img alt='filtre' className='filtre' />
        </StyledCircle>
    )
}

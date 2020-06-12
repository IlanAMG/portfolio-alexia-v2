import React from 'react'
import StyledPagePhotography from './StyledPagePhotography';
import HorizontalScroll from 'react-scroll-horizontal'

export const PagePhotography = () => {

    return (
        <StyledPagePhotography>
        <HorizontalScroll>
            <div className='caroussel'>
                <img alt='test' src='https://i.imgur.com/2kYt363.jpg' />
                <img alt='test' src='https://i.imgur.com/ui71sJB.jpg' />
                <img alt='test' src='https://i.imgur.com/KQT08WM.jpg' />
                <img alt='test' src='https://i.imgur.com/ypeTJvC.jpg' />
                <img alt='test' src='https://i.imgur.com/2kYt363.jpg' />
                <img alt='test' src='https://i.imgur.com/ui71sJB.jpg' />
                <img alt='test' src='https://i.imgur.com/KQT08WM.jpg' />
                <img alt='test' src='https://i.imgur.com/ypeTJvC.jpg' />
            </div>
        </HorizontalScroll>
        </StyledPagePhotography>
    )
}

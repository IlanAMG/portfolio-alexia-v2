import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'

import StyledPhotoItem from './StyledPhotoItem';

export const PhotoItem = ({ slug, alt, src, title1, title2 }) => {

    return (
        <Link to={slug} className='wrapper-photos'>
        <StyledPhotoItem>
                <img alt={alt} src={src} />
                <div className='wrapper-hover'>
                    <small>{title1}</small>
                    <small>{title2}</small>
                </div>
        </StyledPhotoItem>
            </Link>
    )
}

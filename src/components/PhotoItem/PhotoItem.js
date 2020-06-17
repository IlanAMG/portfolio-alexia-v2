import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'

import StyledPhotoItem from './StyledPhotoItem';

export const PhotoItem = ({ slug, alt, src }) => {

    return (
        <Link to={slug} className='wrapper-photos'>
        <StyledPhotoItem>
                <img alt={alt} src={src} />
                <div className='wrapper-hover'>
                    <small>Title</small>
                    <small>Title</small>
                </div>
        </StyledPhotoItem>
            </Link>
    )
}

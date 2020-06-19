import React, { useEffect } from 'react'
import StyledLecteurVideo from './StyledLecteurVideo'

export const LecteurVideo = (props) => {
    const source =`https://www.youtube.com/embed/${props.lien}`

    const handleClose = () => {
        props.action(null)
    }
    
    const escFunction = (event) => {
        if(event.keyCode === 27 && props.lien) {
            props.action(null)
        }
    }  
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)
    }, [])

    useEffect(() => {
        return () => document.removeEventListener('keydown', escFunction, false)
    }, [])

    return (
        <StyledLecteurVideo onClick={handleClose}>
                <iframe  
                    title='film'
                    src={source}
                    frameBorder="0" 
                    allowFullScreen
                    ></iframe>
        </StyledLecteurVideo>
    )
}

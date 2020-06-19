import styled from 'styled-components'

const StyledLecteurVideo = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 105;
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

        iframe { 
            margin: auto;
            width: 80vw; 
            max-width: 80vw;
            height: 45vw;    
        }
    
        @media (min-width:300px) {
            iframe {
            height: calc(80vw * 0.5628205128205128);
            }
        }
        
        @media all and (max-width: 450px) {
            iframe {
                width: 289px;
                height: 163px;
            }
        }
`

export default StyledLecteurVideo
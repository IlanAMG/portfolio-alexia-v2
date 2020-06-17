import styled, { keyframes, css } from 'styled-components'

const fadeOff = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        tranform: scale(0.8)
    }
`
const fadeOffPhotography = keyframes`
    from {
        background: #DDD8D5;
    }
    to {
        background: linear-gradient(180deg, #E9D6FF 0%, #F1E5FF 45.79%, #F1E5FF 67.69%, #FFFFFF 127.41%);
    }
`
const fadeOffVideos = keyframes`
    from {
        background: #DDD8D5;
    }
    to {
        background: linear-gradient(180deg, #D1DAFF 0%, #DDE3FF 28.79%, #E5EAFF 66.99%, #FFFFFF 112.82%);
    }
`
const fadeOffAbout = keyframes`
    from {
        background: #DDD8D5;
    }
    to {
        background: linear-gradient(180deg, #F6E6FB 64.58%, #FCF1FF 84.37%, #FFFFFF 100%);
    }
`

const StyledPageNavigation = styled.section`
    width: 100vw;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DDD8D5;
    flex-direction: column;
    z-index: 100;

        .container-lien {
            margin: 50px;
            z-index: 100;
        }
        .container-lien a {
            text-decoration: none;
            color: #121212;
            opacity: 0.7;
            font-size: 30px;
            transition: 500ms;
            z-index: 100;
        }
        .container-lien a:hover {
            transition: 500ms;
            opacity: 1;
        }

        ${(props) => props.transiTo === 'PHOTOGRAPHY' && css`
            animation: ${fadeOffPhotography} 500ms linear forwards;
        `}
        ${(props) => props.transiTo === 'VIDEOS' && css`
            animation: ${fadeOffVideos} 500ms linear forwards;
        `}
        ${(props) => props.transiTo === 'ABOUT' && css`
            animation: ${fadeOffAbout} 500ms linear forwards !important;
        `}
        ${(props) => props.transiTo !== null && css`
            .container-lien {
                animation: ${fadeOff} 500ms linear forwards !important;
            }
        `}
`

export default StyledPageNavigation
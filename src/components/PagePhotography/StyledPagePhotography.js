import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`
const fadeOff = keyframes`
    from {
        opacity: 1;
        transform: scale(1)
    }
    to {
        opacity: 0;
        transform: scale(0.9)
    }
`

const StyledPagePhotography = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #E9D6FF 0%, #F1E5FF 45.79%, #F1E5FF 67.69%, #FFFFFF 127.41%);
    overflow-Y: hidden;
    overflow-X: scroll;
    transition: 1000ms;

        .caroussel {
            height: 62.5%;
            min-width: 100vw;
            display: flex;
            animation: ${fadeIn} 800ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '0s' : '3.9s'};
            opacity: 0;
        }
        .caroussel img {
            height: 100%;
            margin: 0 45px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
            animation: ${fadeIn} 800ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '0s' : '3.9s'};
            opacity: 0;
        }

        ${(props) => props.navIsOpen === true && css`
            background: #DDD8D5 !important;
            transition: 200ms;
                .caroussel.transiOff {
                    animation: ${fadeOff} 500ms linear forwards;
                    animation-delay: 0s !important;
                }
                .caroussel.transiOff img {
                    animation: ${fadeOff} 500ms linear forwards;
                    animation-delay: 0s !important;
                }
        `}
`

export default StyledPagePhotography
import styled, { css, keyframes } from 'styled-components'

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

const StyledPageVideos = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #D1DAFF 0%, #DDE3FF 28.79%, #E5EAFF 66.99%, #FFFFFF 112.82%);
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
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
            animation: ${fadeIn} 800ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '0s' : '3.9s'};
            opacity: 0;
            cursor: pointer;
        }

        .wrapper-videos {
            height: 100%;
            margin: 0 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
        }
        .wrapper-videos svg {
            z-index: 1;
            position: absolute;
            cursor: pointer;
            opacity: 0.8;
            transition: 500ms;
        }
        .wrapper-videos:hover svg {
            transform: scale(1.15);
            transition: 500ms;
        }
        .wrapper-hover {
            position: absolute;
            padding: 0 10px;
            height: 30px; 
            width: 100%;
            right: -50%;
            transform: rotate(90deg);
            z-index: 50;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            transition: 400ms;
            opacity: 0;
        }
        .wrapper-videos:hover .wrapper-hover {
            right: -53.1%;
            transition: 400ms;
            opacity: 1;
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

export default StyledPageVideos
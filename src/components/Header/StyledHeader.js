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
        opacity: 1
    }
    to {
        opacity: 0
    }
`

const fadeInScroll = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`
const fadeOffScroll = keyframes`
    from {
        opacity: 1
    }
    to {
        opacity: 0;
        transform: translateY(-50px);
    }
`

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

        .container-title a {
            text-decoration: none;
            color: #121212;
        }

        .separator {
            align-self: flex-end;
            width: 100%;
            margin: 0 65px;
            height: 1px;
            background: #121212;
            z-index: 2;
            opacity: 0.5;
            transition: 80ms;
        }

        .circle {
            border-radius: 50%;
            background: ${({colorCircle}) => colorCircle};
            transform: rotate(17.31deg);
            position: absolute;
            width: 26.6vw;
            height: 26.6vw;
            min-width: 300px;
            min-height: 300px;
            left: -8vw;
            top: -20.75vh;
            z-index: 1;
            animation: ${fadeIn} 1.3s linear forwards;
            animation-delay: ${({loadingFinish}) => loadingFinish ? '0s' : '3.6s'};
            opacity: 0;
        }

        .container-title {
            position: absolute;
            margin-left: 65px;
            height: 100%;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container-title h1 {
            font-size: 2em;
            line-height: 59px;
            font-weight: 300;
            text-transform: uppercase;
            color: #121212;
            mix-blend-mode: exclusion;
        }
        .container-title h2 {
            margin-left: 28px;
            font-size: 2em;
            line-height: 59px;
            font-weight: 300;
            text-transform: uppercase;
            font-weight: 100;
            color: #121212;
            transition: 80ms;
        }

        ${(props) => props.navIsOpen === true && css`
            .separator.transiOff {
                opacity: 0 !important;
                transition: 500ms;
            }
            .circle.transiOff {
                animation: ${fadeOff} 0.1s linear forwards;
                animation-delay: 0s !important;
            }
            .container-title h2.transiOff {
                opacity: 0 !important;
                transition: 500ms;
            }
        `}

        ${(props) => props.disapearHeader === true && css`
            animation: ${fadeOffScroll} 0.3s linear forwards;
            animation-delay: 0s !important;
        `}

        ${(props) => props.disapearHeader === false && css`
            animation: ${fadeInScroll} 0.3s linear forwards;
            animation-delay: 0s !important;
        `}

        @media screen and (max-width: 720px) {
            .container-title {
                margin-left: 15px;
            }
            .separator {
                margin: 0 15px;
            }
        }
        @media screen and (max-width: 630px) {
            .container-title h1 {
                font-size: 1.5em;
            }
            .container-title h2 {
                font-size: 1.5em;
                margin-left: 13px;
            }
        }
        @media screen and (max-width: 500px) {
            .container-title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }
            .container-title h1{
                line-height: 1;
                margin-bottom: 3px;
            }
            .container-title h2 {
                line-height: 1;
                margin-top: 3px;
                margin-left: 0;
                text-align: left;
            }
        }
`

export default StyledHeader
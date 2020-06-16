import styled, {css, keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`
const deDroite = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`
const deGauche = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
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

const StyledPageAbout = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #F6E6FB 64.58%, #FCF1FF 84.37%, #FFFFFF 100%);
    transition: 1000ms;
    overflow: hidden;

        .container-passion {
            margin-top: 120px;
            padding-left: 65px;
            padding-right: 65px;
            max-height: 650px;
            width: 100vw;
            display: flex;
            z-index: 1;
        }

        .container-skills {
            margin-top: 13vw;
            padding-left: 65px;
            padding-right: 65px;
            max-height: 650px;
            min-height: 34vw;
            width: 100vw;
            display: flex; 
            justify-content: flex-end;
            z-index: 1;
            position: relative;
        }

        .container-major {
            margin-top: 6vw;
            padding-left: 65px;
            padding-right: 65px;
            max-height: 650px;
            width: 100vw;
            display: flex; 
            z-index: 1;
            position: relative;
        }
        .container-passion .wrapper-txt {
            padding-left: 8px;
        }
        .container-major .wrapper-txt {
            text-align: right;
            width: calc(62.30% - 65px);
        }
        .container-skills .wrapper-txt {
            padding-top: 50px;
            width: calc(62.30% - 65px);
        }

        .container-major .profil2 {
            width: 37.70%;
            z-index: 1;
            position: absolute;
            bottom: -11.5vw;
            right: 65px;
        }
        .profil1, .profil2, .profil3, .circle {
            animation: ${fadeIn} 800ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '0s' : '3.8s'};
            opacity: 0;
        }
        .container-passion h4 {
            animation: ${deDroite} 300ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '0s' : '3.8s'};
            opacity: 0;
        }
        .container-passion p {
            animation: ${deDroite} 300ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '200ms' : '4s'};
            opacity: 0;
        }
        .container-major h4 {
            animation: ${deGauche} 300ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '0s' : '3.8s'};
            opacity: 0;
        }
        .container-major p {
            animation: ${deGauche} 300ms linear forwards;
            animation-delay: ${({ loadingFinish }) => loadingFinish ? '200ms' : '4s'};
            opacity: 0;
        }

        .container-passion .profil1 {
            width: 37.70%;
            z-index: 1;
        }
        .container-skills .profil3 {
            width: 37.70%;
            z-index: 1;
            position: absolute;
            top: -10vw;
            left: 65px;
        }

        .wrapper-txt {
            position: relative;
        }

        .wrapper-txt .circle {
            border-radius: 50%;
            transform: rotate(17.31deg);
            position: absolute;
            width: 26.6vw;
            height: 26.6vw;
            min-width: 300px;
            min-height: 300px;
            z-index: -1;
        }
        .container-passion .circle {
            left: -5.98vw;
            top: 0;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        }
        .container-major .circle {
            right: -24%;
            top: -20%;
            background: linear-gradient(180deg, #D1B4FF 0%, rgba(255, 255, 255, 0) 100%);
            transform: rotate(-150deg);
        }
        .container-skills .circle {
            left: -15%;
            top: -8%;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
            transform: rotate(105deg);
        }

        h4 {
            font-size: 100px;
            line-height: 100px;
            color: #121212;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 1;
        }
        .container-passion p, .container-skills p {
            font-size: 32px;
            width: 100%;
            line-height: 32px;
            letter-spacing: 0.05em;
            color: #000000;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            white-space:wrap;
            padding-left: 2vw;
            z-index: 1;
        }
        .container-major p {
            font-size: 32px;
            width: 100%;
            line-height: 32px;
            letter-spacing: 0.05em;
            color: #000000;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            white-space:wrap;
            padding-right: 2vw;
            z-index: 1;
        }
        small {
            color: #D1B4FF;
            z-index: 1;
        }

        footer {
            position: relative;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            z-index: 1;
        }

        footer .circle {
            border-radius: 50%;
            position: absolute;
            width: 26.6vw;
            height: 26.6vw;
            min-width: 300px;
            min-height: 300px;
            left: -6vw;
            bottom: -10vw;
            z-index: -1;
            background: linear-gradient(180deg, #D1B4FF 0%, rgba(255, 255, 255, 0) 100%);
            transform: rotate(120.82deg);
        }

        footer p {
            font-size: 14px;
            line-height: 14px;
            text-align: center;
            color: #000000;
        }

    .container-insta {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        z-index: 2;
    }

    .container-insta .wrapper-contact {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 1;
        text-decoration: none;
        color: #121212;
        opacity: 0.8;
        transition: 200ms;
    }
    .container-insta .wrapper-contact:hover {
        transform: scale(1.1);
        opacity: 1;
        transition: 200ms;
    }
    .container-insta .wrapper-contact svg {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
        transition: 400ms;
    }
    .container-insta .wrapper-contact svg:hover {
        transform: scale(1.1);
        opacity: 1;
        transition: 400ms;
    }
    .container-insta .wrapper-contact small {
        color: #121212;
        font-size: 24px;
        line-height: 24px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .container-insta .circle {
        border-radius: 50%;
        position: absolute;
        width: 26.6vw;
        height: 26.6vw;
        min-width: 300px;
        min-height: 300px;
        right: -16%;
        top: -40%;
        z-index: 0;
        background: linear-gradient(180deg, #D1B4FF 0%, rgba(255, 255, 255, 0) 100%);
        transform: rotate(-60deg);
    }

    iframe {
        height: 400px;
        width: 400px;
        z-index: 2;
    }

    .lightwidget-widget {
        border: none;
        height: 400px;
        width: 400px;
        z-index: 2;
    }

    ${(props) => props.navIsOpen === true && css`
            background: #DDD8D5 !important;
            transition: 200ms;
                .profil1, .profil2, .profil3, .circle, .container-passion, .container-skills, .container-major, .container-insta, footer {
                    animation: ${fadeOff} 500ms linear forwards;
                    animation-delay: 0s !important;
                }
        `}
`

export default StyledPageAbout
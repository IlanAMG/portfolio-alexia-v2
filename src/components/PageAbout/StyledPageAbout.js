import styled from 'styled-components'

const StyledPageAbout = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #E9D6FF 0%, #F1E5FF 45.79%, #F1E5FF 67.69%, #FFFFFF 127.41%);
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
    }
    .container-insta .wrapper-contact svg {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
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
        right: -6%;
        top: -40%;
        z-index: 1;
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
`

export default StyledPageAbout
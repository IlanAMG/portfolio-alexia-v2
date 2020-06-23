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
        background: linear-gradient(358.59deg, #E9D6FF 0.14%, #FFFFFF 98.87%);
    }
    to {
        background: #DDD8D5;
    }
`
const fadeOffImg = keyframes`
    from {
        opacity: 1;
        transform: scale(1)
    }
    to {
        opacity: 0;
        transform: scale(0.9)
    }
`

const StyledBlogPost = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(358.59deg, #E9D6FF 0.14%, #FFFFFF 98.87%);
    position: absolute;
        .container-credits {
            width: 100%;
            margin: 110px 0 30px 0;
            padding-left: 4.5vw;
            display: flex;
            align-items: flex-start;
            jusitfy-content: center;
            flex-direction: column;
            animation: ${fadeIn} 600ms linear forwards;
        }

        .galerie {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .galerie img {
            width: 100%;
            animation: ${fadeIn} 900ms linear forwards;
        }
        .galerie .wrapper-img {
            max-width: 100%;
            margin-bottom: 85px;
            overflow: hidden;
            max-height: 1000px !important;
        }

        @media screen and (max-width: 670px) {
            .galerie .wrapper-img {
                width: 100% !important;
            }
        }

        footer {
            width: 100vw;
            height: 120px;
            display: flex;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        footer nav, ul {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
        }

        footer a {
            text-decoration: none;
            color: #121212;
            font-size: 30px;
            opacity: 0.8;
            transition: 400ms;
        }
        footer a:hover {
            font-size: 40px;
            opacity: 1;
            transition: 400ms;
        }

        footer ul li:nth-child(1) {
            padding-left: 30px;
        }
        footer ul li:nth-child(2) {
            padding-right: 30px;
        }
        span {
            font-family: Josefin Sans;
            font-style: normal;
            font-weight: 300;
            font-size: 19px;
            line-height: 20px;
        }
        footer span {
            font-family: Josefin Sans;
            font-style: normal;
            font-weight: 300;
            font-size: 19px;
            line-height: 13px;
            text-align: center;
        }

        ${(props) => props.navIsOpen === true && css`
            animation: ${fadeOff} 300ms linear forwards;
            animation-delay: 0s !important;
                .galerie img, .container-credits, footer, span {
                    animation: ${fadeOffImg} 500ms linear forwards;
                    animation-delay: 0s !important; 
                }
        `}
`

export default StyledBlogPost
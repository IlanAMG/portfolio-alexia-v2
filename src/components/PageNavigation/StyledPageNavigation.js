import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;;
    }
`

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
    height: 243.46vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 100;
    position: absolute;
    z-index: 0;
        
        nav {
            position: absolute;
            top: 50.36vh;
            transition: 500ms;
            z-index: 10;
        }

        .container-lien {
            z-index: 100;
            display: flex;
            justify-content: center;
            height: 42.03vh;
            margin-bottom: 7.5vh;
            transition: 500ms;
        }
        ul .container-lien:nth-child(1) {
            align-items: flex-end;
            padding-bottom: 7vh;
            transition: 500ms;
        }
        ul .container-lien:nth-child(2) {
            align-items: ${({aboutSelect}) => aboutSelect ? 'flex-end' : 'flex-start'};
            padding-bottom: ${({aboutSelect}) => aboutSelect ? '7vh' : 0};
        }
        ul .container-lien:nth-child(3) {
            align-items: flex-start;
            padding-top: 7vh;
            transition: 500ms;
        }
        .container-lien a {
            text-decoration: none;
            color: #121212;
            font-size: 50px;
            transition: 500ms;
            z-index: 100;
            padding-top: 7vh;
            transition: 500ms;
            cursor: pointer;
            opacity: 0;
            animation: ${fadeIn} 900ms linear forwards !important;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .container-lien.select a {
            font-size: 70px;
            opacity: 0;
            padding-bottom: 0 !important;
            padding-top: 0 !important;
            transition: 500ms;
            animation: ${fadeIn} 900ms linear forwards !important;
        }
        .container-lien.select {
            height: 42.03vh;
            justify-content: center;
            align-items: center !important;
            display: flex;
            padding-bottom: 0 !important;
            padding-top: 0 !important;
            transition: 500ms;
        }

        .container-lien a:hover {
            transition: 500ms;
            opacity: 1;
        }

        .container-lien .wrapper-link {
            position: relative;
        }

        .container-lien .bg-hover {
            position: absolute;
            width: 100%;
            height: 50%;
            left: 0;
            bottom: 0;
            z-index: -1;
        }

        .container-lien .bg-hover.photo {
            background: linear-gradient(0deg, #E9D6FF 0%, rgba(233, 214, 255, 0.15) 128.38%);
        }
        .container-lien .bg-hover.video {
            background: linear-gradient(360deg, #D1DAFF 0%, rgba(255, 255, 255, 0) 137.5%);
        }
        .container-lien .bg-hover.about {
            background: linear-gradient(360deg, #F6E6FB 0%, rgba(246, 230, 251, 0) 136.49%);
        }

        .container-galerie {
            height: auto;
            width: 150vw;
            max-width: 150vw;
            background: #DDD8D5;
            position: absolute;
            top: -4.16555vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            ${'' /* animation: ${fadeIn} 1000ms ease-in forwards !important; */}
            opacity: 0.
        }

        .wrapper-img {
            height: 42.03vh;
            width: auto;
            overflow: hidden;
            justify-content: center;
            display: flex;
            margin: 4.16555vh;
        }
        .wrapper-img .img {
            height: 100%;
        }
        
        .filter {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 3;
            background: rgba(221, 216, 213, 0.6);
        }
        .row {
            display: flex;
               justify-content: center;
               overflow: hidden;
               width: 100%;
        }

        ${(props) => props.transiTo === 'PHOTOGRAPHY' && css`
        animation: ${fadeOffPhotography} 500ms linear forwards;
            .container-galerie {
                animation: ${fadeOffPhotography} 500ms linear forwards;
            }
        `}
        ${(props) => props.transiTo === 'VIDEOS' && css`
        animation: ${fadeOffVideos} 500ms linear forwards;
            .container-galerie {
                animation: ${fadeOffVideos} 500ms linear forwards;
            }
        `}
        ${(props) => props.transiTo === 'ABOUT' && css`
        animation: ${fadeOffAbout} 500ms linear forwards !important;
            .container-galerie {
                animation: ${fadeOffAbout} 500ms linear forwards !important;
            }
        `}
        ${(props) => props.transiTo !== null && css`
            .container-lien {
                animation: ${fadeOff} 500ms linear forwards !important;
            }
            .wrapper-img .img {
                animation: ${fadeOff} 500ms linear forwards !important;
            }
        `}

        @media screen and (max-width: 1200px) {
           .container-galerie {
                flex-wrap: nowrap;
                flex-direction: column;
                flex: none;
           }
           .row {
               display: flex;
               justify-content: center;
               overflow: hidden;
               width: 100%;
           }
           .wrapper-img {
            min-width: 200px;
        }
        }
        @media screen and (max-width: 550px) {
            .container-lien a {
                font-size: 36px;
            }
            .container-lien.select a {
                font-size: 44px;
            }
            .wrapper-img {
                height: 32.03vh;
                margin: 2.16555vh;
            }
        }
        @media screen and (max-width: 360px) {
            .container-lien a {
                font-size: 32px;
            }
            .container-lien.select a {
                font-size: 37px;
            }
        }
`

export default StyledPageNavigation
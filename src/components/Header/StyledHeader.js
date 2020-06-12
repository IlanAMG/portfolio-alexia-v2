import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`

const StyledHeader = styled.header`
    position: absolute;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

        .separator {
            align-self: flex-end;
            width: 100%;
            margin: 0 65px;
            height: 1px;
            background: #121212;
            z-index: 2;
            opacity: 0.5;
        }

        .circle {
            border-radius: 50%;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
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
            animation-delay: 3.6s;
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
        }
        .container-title h2 {
            margin-left: 28px;
            font-size: 2em;
            line-height: 59px;
            font-weight: 300;
            text-transform: uppercase;
            font-weight: 100;
            color: #121212;
        }
`

export default StyledHeader
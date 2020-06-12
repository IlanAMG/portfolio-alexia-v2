import styled, { css, keyframes } from 'styled-components'

const circleAround1 = keyframes`
    from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
`

const circleAround2 = keyframes`
    from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
    to   { transform: rotate(-360deg) translateX(20px) rotate(360deg); }
`

const StyledCircle = styled.div`
    border-radius: 50%;
    width: ${({width}) => width+'vw'};
    height: ${({height}) => height+'vw'};
    min-width: 280px;
    min-height: 280px;
    position: absolute;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center center;
    overflow: hidden;

    ${(props) => props.num === 1 && css`
        left: 11.87vw;
        top: -200px;
        animation: ${circleAround2} 8s linear infinite;
            .filtre {
                background: linear-gradient(70deg, rgba(209, 180, 255, 0.7) 0%, rgba(209, 180, 255, 0) 100%);
            }
    `}
    ${(props) => props.num === 2 && css`
        left: 34.84vw;
        top: 29.90vh;
        animation: ${circleAround1} 11s linear infinite;
            .filtre {
                background: linear-gradient(-90deg, rgba(209, 180, 255, 0.4) 0%, rgba(209, 180, 255, 0) 100%); 
            }
    `}
    ${(props) => props.num === 3 && css`
        bottom: -150px;
        left: -50px;
        animation: ${circleAround2} 10s linear infinite;
            .filtre {
                background: linear-gradient(-110deg, rgba(209, 180, 255, 0.7) 0%, rgba(209, 180, 255, 0) 100%);
            }
    `}
    ${(props) => props.num === 4 && css`
        bottom: -100px;
        right: -60px;
        animation: ${circleAround1} 7s linear infinite;
            .filtre {
                background: linear-gradient(110deg, rgba(209, 180, 255, 0.7) 0%, rgba(209, 180, 255, 0) 100%);
            }
    `}

    img {
        width: ${({width}) => width+'vw'};
        height: ${({height}) => height+'vw'};
        z-index: -1;
        min-width: 280px;
        min-height: 280px;
    }

    .filtre {
        width: 100%;
        height: 100%;
        position: absolute; 
        border-radius: 50%;  
    }
    
`

export default StyledCircle
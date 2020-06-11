import styled, { keyframes, css } from 'styled-components';

const fade = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(1.25);
    opacity: 0;
  }
`;


const StyledLoading = styled.section`
    width: 100vw;
    height: 100vh;
    z-index: 50;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: opacity 500ms;
    background: linear-gradient(180deg, #E9D6FF 0%, #F1E5FF 45.79%, #F1E5FF 67.69%, #FFFFFF 127.41%);

        .container-bienvenue {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 11vh 0 0 11vw;
            width: 50vw;
            color: white;
            z-index: 2;
            mix-blend-mode: exclusion;
        }
        .container-bienvenue h4 {
            font-size: 18px;
            line-height: 26px;
        }
        .container-bienvenue h5 {
            font-size: 40px;
            line-height: 59px;
        }

        small {
            position: absolute;
            bottom: 1.8vh;
            left: 2.6vw;
            text-align: center;
            font-size: 14px;
            line-height: 21px;
            color: white;
            z-index: 1;
            mix-blend-mode: exclusion;
        }

        ${props => props.finish && css`
            animation: ${fade} 500ms linear forwards;
        `}         
`

export default StyledLoading
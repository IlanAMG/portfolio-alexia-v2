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

const StyledContainerArrowNav = styled.div`
    position: fixed;
    bottom: 6.5vh;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 800ms linear forwards;
    animation-delay: ${({ loadingFinish }) => loadingFinish ? '0s' : '3.9s'};
    display: flex;
    opacity: 0;

        svg {
            margin: 0 80px;
            cursor: pointer;
        }

        ${(props) => props.navIsOpen === true && css`
            animation: ${fadeOff} 500ms linear forwards;
            animation-delay: 0s !important;
        `}
`

export default StyledContainerArrowNav
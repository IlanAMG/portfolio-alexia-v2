import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
`

const StyledScrollToAnimate = styled.svg`
    position: fixed;
    bottom: 25px;
    left: 40px;
    animation: ${rotate} 8s linear infinite;
    z-index: -1;
    transition: 80ms;

    ${(props) => props.navIsOpen === true && css`
        opacity: 0;
        transition: 500ms;
    `}

    @media screen and (max-width: 500px) {
        display: none;
    }
    @media screen and (max-height: 600px) {
        display: none;
    }
`

export default StyledScrollToAnimate
import styled, { keyframes } from 'styled-components'

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
`

export default StyledScrollToAnimate
import styled from 'styled-components'

const StyledPagePhotography = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(180deg, #E9D6FF 0%, #F1E5FF 45.79%, #F1E5FF 67.69%, #FFFFFF 127.41%);
    overflow-Y: hidden;
    overflow-X: scroll;

        .caroussel {
            height: 62.5%;
            min-width: 100vw;
            margin-top: 18.75vh;
            display: flex;
            transform: translateX(${({ translateX }) => `${translateX}px`});
        }
        .caroussel img {
            height: 100%;
            margin: 0 45px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
        }

`

export default StyledPagePhotography
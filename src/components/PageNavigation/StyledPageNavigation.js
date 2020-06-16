import styled from 'styled-components'

const StyledPageNavigation = styled.section`
    width: 100vw;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DDD8D5;
    flex-direction: column;
    z-index: 100;

        .container-lien {
            margin: 50px;
            z-index: 100;
        }
        .container-lien a {
            text-decoration: none;
            color: #121212;
            opacity: 0.7;
            font-size: 30px;
            transition: 500ms;
            z-index: 100;
        }
        .container-lien a:hover {
            transition: 500ms;
            opacity: 1;
        }
`

export default StyledPageNavigation
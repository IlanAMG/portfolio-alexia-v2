import styled, { keyframes } from 'styled-components';

const vague = keyframes`
    from {             
        top: 200px;
        right: 0;    
    }

    to   { 
        top: -200px;
        right: -1000px;     
    }
`

const StyledLoading = styled.section`
    position: absolute;
    right: 4.5%;
    top: 6.25%;
    display: flex;
    justify-content: space-between;
    align-items: center;

        .container-vague {
            width: 18vw;
            height: 18vw;
            max-width: 300px;
            max-height: 300px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 50%;
            overflow: hidden;
            ${'' /* background: #D1B4FF; */}
            left: 0;
            margin-right: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .container-small {
            right: 0;
            width: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
        }
        .container-small small {
            text-align: center;
            font-size: 18px;
            line-height: 28px;
        }
        .pourcentage {
            font-size: 40px;
            line-height: 48px;
            text-align: center;
            color: #FFFFFF;
            z-index: 10;
            padding-left: 10px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .container-vague svg {
            position: absolute;
            animation-delay: 1s;
            animation: ${vague} 3.7s ease-in forwards;
            z-index: 9;
        }
`

export default StyledLoading
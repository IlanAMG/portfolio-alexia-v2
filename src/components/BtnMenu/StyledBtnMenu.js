import styled from 'styled-components'

const StyledBtnMenu = styled.div`
    position: fixed;
    z-index: 25;
    width: 50px;
    height: 50px;
    right: 65px;
    cursor: pointer;

        .wrapper-menu, .wrapper-croix {
            display: flex;
            justify-content: flex-end;
            transition: 500ms;
            z-index: 10;
            height: 100%;
            width: 100%;
            position: relative;
        }

        .wrapper-menu:hover .ligne {
            width: 40px;
            transition: 400ms;
        }
        .wrapper-menu:hover .ligne::before {
            width: 30px;
            transition: 400ms;
        }
        .wrapper-menu:hover .ligne::after {
            width: 50px;
            transition: 400ms;
        }

        .ligne {
            position: absolute;
            top: 50%;
            right: 0;
            width: ;
            height: 2px;
            width: 30px;
            transition: all 0ms 300ms;
            background: #121212;
            transition: width 400ms;
        }
        .ligne::before {
            content: '';
            background: #121212;
            position: absolute;
            bottom: 8px;
            right: 0;
            width: 50px;
            height: 2px;
            transition: bottom 300ms 300ms ease, transform 300ms ease;
            transition: width 400ms;
        }
        .ligne::after {
            content: '';
            background: #121212;
            position: absolute;
            top: 8px;
            right: 0;
            width: 40px;
            height: 2px;
            transition: top 300ms 300ms ease, transform 300ms ease;
            transition: width 400ms;
        }

        .wrapper-menu.wrapper-croix .ligne::before{
            bottom: 0;
            transform: rotate(-45deg);
            background: #121212;
            transition: bottom 300ms ease, transform 300ms 300ms ease;
            width: 40px;
        }

        .wrapper-menu.wrapper-croix .ligne {
            background: transparent;
            transition: 10ms;
        }

        .wrapper-menu.wrapper-croix .ligne::after{
            top: 0;
            width: 40px;
            transform: rotate(45deg);
            background: #121212;
            transition: top 300ms ease, transform 300ms 300ms ease;
        }

        @media screen and (max-width: 720px) {
            right: 15px;
        }
`

export default StyledBtnMenu
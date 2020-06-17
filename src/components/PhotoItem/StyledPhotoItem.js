import styled from 'styled-components'

const StyledPhotoItem = styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;

        .wrapper-hover small:nth-child(1) {
            opacity: 0;
            position: absolute;
            right: -10px;
            top: 5px;
            transform: rotate(90deg);
            transition: 500ms;
            z-index: -1;
        }
        .wrapper-hover small:nth-child(2) {
            opacity: 0;
            position: absolute;
            right: -10px;
            bottom: 5px;
            transform: rotate(90deg);
            transition: 500ms;
            z-index: -1;
        }
`

export default StyledPhotoItem
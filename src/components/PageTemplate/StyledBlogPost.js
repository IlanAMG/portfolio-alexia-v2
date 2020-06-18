import styled from 'styled-components'

const StyledBlogPost = styled.div`
    width: 100vw;
    background: linear-gradient(358.59deg, #E9D6FF 0.14%, #FFFFFF 98.87%);
    position: absolute;
        .container-credits {
            width: 100%;
            margin: 110px 0 30px 65px;
            display: flex;
            align-items: flex-start;
            jusitfy-content: center;
            flex-direction: column;
        }

        .galerie {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .galerie img {
            width: 100%;
        }
        .galerie .wrapper-img {
            max-width: 100%;
            margin-bottom: 85px;
            overflow: hidden;
        }
${'' /* 
        .galerie .wrapper-img:nth-child(2), .wrapper-img:nth-child(3) {
            width: 50%;
            height: 1000px;
        }
        .galerie .wrapper-img:nth-child(5), .wrapper-img:nth-child(6) {
            width: 50%;
            max-height: 1200px;
        }
        .galerie .wrapper-img:nth-child(8), .wrapper-img:nth-child(9) {
            width: 50%;
            max-height: 1200px;
        } */}
        footer {
            width: 100vw;
            height: 120px;
            display: flex;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        footer nav, ul {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
        }

        footer a {
            text-decoration: none;
            color: #121212;
            font-size: 30px;
            opacity: 0.8;
            transition: 400ms;
        }
        footer a:hover {
            font-size: 40px;
            opacity: 1;
            transition: 400ms;
        }

        footer ul li:nth-child(1) {
            padding-left: 30px;
        }
        footer ul li:nth-child(2) {
            padding-right: 30px;
        }
        span {
            font-family: Josefin Sans;
            font-style: normal;
            font-weight: 300;
            font-size: 19px;
            line-height: 20px;
        }
        footer span {
            font-family: Josefin Sans;
            font-style: normal;
            font-weight: 300;
            font-size: 19px;
            line-height: 13px;
            text-align: center;
        }
`

export default StyledBlogPost
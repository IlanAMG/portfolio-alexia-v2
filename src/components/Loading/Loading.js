import React from 'react'
import { Spring } from "react-spring/renderprops";
import { useStaticQuery, graphql } from "gatsby"
import TrackVisibility from 'react-on-screen';

import StyledLoading from './StyledLoading'
import { Circle } from '../Circle/Circle'
import { CircleLoading } from '../CircleLoading/CircleLoading'
import VisibilitySensor from '../../utils/VisibilitySensor';


export const Loading = ({ opacityLoading }) => {

  const { datoCmsLoadingpage } = useStaticQuery(
    graphql`
        query {
            datoCmsLoadingpage {
                citation
                photo1 {
                  fluid(maxHeight: 900) {
                      src
                    ...GatsbyDatoCmsFluid
                  }
                }
                photo2 {
                  fluid(maxHeight: 900) {
                      src
                    ...GatsbyDatoCmsFluid
                  }
                }
                photo3 {
                  fluid(maxHeight: 900) {
                      src
                    ...GatsbyDatoCmsFluid
                  }
                }
                photo4 {
                  fluid(maxHeight: 900) {
                      src
                    ...GatsbyDatoCmsFluid
                  }
                }
              }
            }
        `)

  const url1 = datoCmsLoadingpage.photo1.fluid
  const url2 = datoCmsLoadingpage.photo2.fluid
  const url3 = datoCmsLoadingpage.photo3.fluid
  const url4 = datoCmsLoadingpage.photo4.fluid

  return (
    <StyledLoading  >
      <VisibilitySensor partialVisiblity offset={{ top: -100 }} intervalDelay={500} delayedCall once>
        {({ isVisible }) => (
          <Spring
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0)"
                : "translateX(-50px)",
            }}>
            {(props) => (
              <div style={{ ...props }} className='container-bienvenue'>
                <h4>BIENVENUE</h4>
                <h5>{datoCmsLoadingpage.citation}</h5>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <small className='devtrotter-small'>D<br />e<br />v<br />T<br />r<br />o<br />t<br />t<br />e<br />r<br />©<br />2<br />0<br />2<br />0</small>
      <Circle circleWidth={29.58} circleHeight={29.58} url={url1} num={1} />
      <Circle circleWidth={27.39} circleHeight={27.39} url={url2} num={2} />
      <Circle circleWidth={25.78} circleHeight={25.78} url={url3} num={3} />
      <Circle circleWidth={24.58} circleHeight={24.58} url={url4} num={4} />
      <TrackVisibility partialVisibility>
        <CircleLoading />
      </TrackVisibility>
    </StyledLoading>
  )
}

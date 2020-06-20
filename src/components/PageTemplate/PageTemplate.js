import React, { useContext } from 'react'
import { Link } from 'gatsby';

import StyledBlogPost from './StyledBlogPost';
import Context from '../../utils/context';

export const PageTemplate = ({ galerie, previous, next, post, creditLigne1, creditLigne2, creditLigne3, creditLigne4, creditLigne5, creditLigne6 }) => {
    const { navIsOpen, openNavTransiFinish } = useContext(Context)
    return (
        !openNavTransiFinish &&
            <StyledBlogPost navIsOpen={navIsOpen}>
              <div className='container-credits'>
                {creditLigne1 !== '' &&
                <span>
                    {creditLigne1}
                </span>}
                {creditLigne2 !== '' &&
                <span>
                    {creditLigne2}
                </span>}
                {creditLigne3 !== '' &&
                <span>
                    {creditLigne3}
                </span>}
                {creditLigne4 !== '' &&
                <span>
                    {creditLigne4}
                </span>}
                {creditLigne5 !== '' &&
                <span>
                    {creditLigne5}
                </span>}
                {creditLigne6 !== '' &&
                <span>
                    {creditLigne6}
                </span>}
              </div>
              <section className='galerie'>
                {post.galeriePhoto.map((photo, id) => {
                  return (
                    <div className='wrapper-img' style={{width: galerie[id]}}>
                      <img alt={photo.alt} src={photo.fluid.src} />
                    </div>
                  )
                })
      
                }
              </section>
              <footer>
                <nav>
                  <ul>
                    <li>
                      {next && (
                        <Link to={next.slugProjet} rel="next">
                            {next.alt} ←
                        </Link>
                      )}
                    </li>
                    <li>
                      {previous && (
                        <Link to={previous.slugProjet} rel="prev">
                            → {previous.alt}
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
                <span>Created and Designed<br/><br/>by Dev’Trotter<br/><br/>© 2020</span>
              </footer>
      
            </StyledBlogPost>
    )
}

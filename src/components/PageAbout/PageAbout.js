import React, { useContext, useEffect } from 'react'
import { BsEnvelope } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from '../../utils/VisibilitySensor';
import StyledPageAbout from './StyledPageAbout';
import Context from '../../utils/context';

export const PageAbout = () => {
    const { openNavTransiFinish, navIsOpen, loadingFinish } = useContext(Context)

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [navIsOpen]);


    return (
        !openNavTransiFinish &&
        <StyledPageAbout navIsOpen={navIsOpen} loadingFinish={loadingFinish}>
            <div className='container-passion'>
                <img className='profil1' alt='profil1' src={'https://i.imgur.com/ghtp1Iu.jpg'} />
                <div className='wrapper-txt'>
                    <h4><small>"</small>PASSION<small>"</small></h4>
                    <p>Passionate about art I have decided at a young age to made this passion my job.<br /><br />
                    I am always looking for oppotunities to practice my art, I wish to bring up my arts in the make-up industry.
                    </p>
                    <div className='circle' />
                </div>
            </div>
            <div className='container-major'>
                <div className='wrapper-txt'>
                    <h4><small>"</small>MAJOR<small>"</small></h4>
                    <p>After getting a highschool degree in litterature, I have graduated major of promotion, expert make-up artist degree front the Conservatoire Du Maquillage in Paris.<br /><br />
                        I can create fashion, beauty, television and theater Make-up, Also FX Make-up and even face prothesis.
                    </p>
                    <div className='circle' />
                </div>
                <img className='profil2' alt='profil2' src={'https://i.imgur.com/Ne5YVF9.jpg'} />
            </div>
            <div className='container-skills'>
                <img className='profil3' alt='profil3' src={'https://i.imgur.com/Eqt4yUW.jpg'} />
                <div className='wrapper-txt'>
                    <VisibilitySensor partialVisiblity offset={{ top: -50 }} once>
                        {({ isVisible }) => (
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateY(0)"
                                        : "translateX(50px)",
                                }}>
                                {(props) => (
                                    <h4 style={{ ...props }}><small>"</small>SKILLS<small>"</small></h4>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                    <VisibilitySensor partialVisiblity offset={{ top: -50 }} intervalDelay={200} delayedCall once>
                        {({ isVisible }) => (
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateY(0)"
                                        : "translateX(50px)",
                                }}>
                                {(props) => (
                                    <p style={{ ...props }}>I have many skills, My experience goes from numerous photo shooting, to musicals passing by shortmovies and dancing shows.
                                    </p>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                    <div className='circle' />
                </div>
            </div>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <div className='container-insta'>
                <VisibilitySensor partialVisiblity offset={{ top: -50 }} once>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateY(0)"
                                    : "translateY(50px)",
                            }}>
                            {(props) => (
                                <a  name='mail' href='mailto:alexiaamzlg@gmail.com' style={{ ...props }} className='wrapper-contact'>
                                    <BsEnvelope />
                                    <small>alexiaamzlg@gmail.com</small>
                                </a>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <iframe title='insta' src="//lightwidget.com/widgets/189ddda505ad52b3ba706041c7af736e.html" scrolling="no" allowtransparency="true" className="lightwidget-widget"></iframe>
                <VisibilitySensor partialVisiblity offset={{ top: -50 }} once>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateY(0)"
                                    : "translateY(50px)",
                            }}>
                            {(props) => (
                                <a name='instagram' rel="noopener noreferrer" href='https://www.instagram.com/alexiamzallag/' target='_blank' style={{ ...props }} className='wrapper-contact insta'>
                                    <AiOutlineInstagram />
                                    <small>alexiaamzlg@gmail.com</small>
                                </a>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <div className='circle' />
            </div>
            <footer>
                <div className='circle' />
                <p>
                    designed by dev’trotter<br /><br />© 2020
                </p>
            </footer>
        </StyledPageAbout>
    )
}

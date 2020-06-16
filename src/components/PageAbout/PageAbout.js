import React, { useContext } from 'react'
import { BsEnvelope } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';

import StyledPageAbout from './StyledPageAbout';
import Context from '../../utils/context';

export const PageAbout = () => {
    const { openNavTransiFinish } = useContext(Context)

    return (
        !openNavTransiFinish &&
        <StyledPageAbout>
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
                    <p>After getting a highschool degree in litterature, I have graduated major of promotion, expert make-up artist degree front the Conservatoire Du Maquillage in Paris.<br/><br/>
                        I can create fashion, beauty, television and theater Make-up, Also FX Make-up and even face prothesis.
                    </p>
                    <div className='circle' />
                </div>
                <img className='profil2' alt='profil2' src={'https://i.imgur.com/Ne5YVF9.jpg'} />
            </div>
            <div className='container-skills'>
                <img className='profil3' alt='profil3' src={'https://i.imgur.com/Eqt4yUW.jpg'} />
                <div className='wrapper-txt'>
                    <h4><small>"</small>SKILLS<small>"</small></h4>
                    <p>I have many skills, My experience goes from numerous photo shooting, to musicals passing by shortmovies and dancing shows. 
                    </p>
                    <div className='circle' />
                </div>
            </div>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <div className='container-insta'>
                <div className='wrapper-contact'>
                    <BsEnvelope />
                    <small>alexiaamzlg@gmail.com</small>
                </div>
                <iframe title='insta' src="https://cdn.lightwidget.com/widgets/52b2fbe5880d5c71b4e2dcc3d08931c2.html" scrolling="no" allowtransparency="true" className="lightwidget-widget"></iframe>
                <div className='wrapper-contact'>
                    <AiOutlineInstagram />
                    <small>alexiaamzlg@gmail.com</small>
                </div>
                <div className='circle' />
            </div>
            <footer>
                <div className='circle' />
                <p>
                    designed by dev’trotter<br/><br/>2020
                </p>
            </footer>
        </StyledPageAbout>
    )
}

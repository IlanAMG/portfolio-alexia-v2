// import React, { useRef, useEffect, useState, useContext } from 'react'

// import StyledPagePhotography from './StyledPagePhotography';
// import { SvgScrollToAnimate } from '../SvgScrollToAnimate/SvgScrollToAnimate';
// import { ContainerArrowNav } from '../ContainerArrowNav/ContainerArrowNav';
// import { PhotoItem } from '../PhotoItem/PhotoItem';
// import Context from '../../utils/context';

// export const PagePhotography = ({ projets }) => {
//     const { navIsOpen, loadingFinish, openNavTransiFinish, pageLoad } = useContext(Context)
//     let caroussel = useRef(null)
//     let timer = useRef(null)
//     const [carousselScrollLeft, setCarousselScrollLeft] = useState(0)
//     const [imgDisapear, setImgDisapear] = useState(false)
//     let startTouch = useRef(null)

//     const handleClickNext = (coeff) => {
//         //effet smooth à retravailler
//         let delta = 1;
//         for (let i = 1; i <= 240 * coeff; i++) {
//             const currentScrollDelta = caroussel.current.scrollLeft
//             setCarousselScrollLeft(currentScrollDelta)
//             if (i <= 30 * coeff && i > 0) {
//                 delta += 0.016
//             } else if (i <= 60 * coeff && i > 30 * coeff) {
//                 delta += 0.023
//             } else if (i <= 110 * coeff && i > 60 * coeff) {
//                 delta += 0.026
//             } else if (i <= 120 * coeff && i > 110 * coeff ) {
//                 delta += 0.029
//             } else if (i <= 170 * coeff && i > 120 * coeff ) {
//                 delta -= 0.029
//             } else if (i <= 180 * coeff && i > 170 * coeff) {
//                 delta -= 0.026
//             } else if (i <= 210 * coeff && i > 180 * coeff) {
//                 delta -= 0.023
//             } else if (i <= 240 * coeff && i > 210 * coeff) {
//                 delta -= 0.016
//             }
//             caroussel.current.scrollLeft = currentScrollDelta + (delta * 0.60);
//         }
//     }
//     const handleClickPrev = (coeff) => {
//         //effet smooth à retravailler
//         let delta = 1;
//         for (let i = 1; i <= 240 * coeff; i++) {
//                 const currentScrollDelta = caroussel.current.scrollLeft
//                 setCarousselScrollLeft(currentScrollDelta)
//                 if (i <= 30 * coeff && i > 0) {
//                     delta += 0.016
//                 } else if (i <= 60 * coeff && i > 30 * coeff) {
//                     delta += 0.023
//                 } else if (i <= 110 * coeff && i > 60 * coeff) {
//                     delta += 0.026
//                 } else if (i <= 120 * coeff && i > 110 * coeff ) {
//                     delta += 0.029
//                 } else if (i <= 170 * coeff && i > 120 * coeff ) {
//                     delta -= 0.029
//                 } else if (i <= 180 * coeff && i > 170 * coeff) {
//                     delta -= 0.026
//                 } else if (i <= 210 * coeff && i > 180 * coeff) {
//                     delta -= 0.023
//                 } else if (i <= 240 * coeff && i > 210 * coeff) {
//                     delta -= 0.016
//                 }
//                 caroussel.current.scrollLeft = currentScrollDelta - (delta * 0.60);
//         }
//     }

//     const startTouchMove = (e) => {
//         const start = e.changedTouches[0].clientX
//         startTouch.current = start
//     }
//     const endTouchMove = () => {
//         startTouch.current = null
//     }

//     function onMouseWheel(e) {
//         if (e.deltaY) {
//             e.preventDefault()
//             const currentScrollDelta = caroussel.current.scrollLeft
//             setCarousselScrollLeft(currentScrollDelta)
//             if (e.deltaY !== 0) {
//                 caroussel.current.scrollLeft = currentScrollDelta + (e.deltaY * 0.60);
//             } else {
//                 caroussel.current.scrollLeft = currentScrollDelta + (e.deltaX * 0.60);
//             }
//         } 
//     }
//     useEffect(() => {
//         if (pageLoad && !navIsOpen) {
//             if (caroussel.current.scrollLeft !== null) {
//                 if (caroussel.current.scrollLeft === 0) {
//                     caroussel.current.scrollLeft = caroussel.current.scrollWidth / 3
//                 } else if (caroussel.current.scrollLeft >= caroussel.current.scrollWidth * 0.67) {
//                     caroussel.current.scrollLeft = caroussel.current.scrollWidth / 3
//                 }
//             }
//         }
//     }, [carousselScrollLeft])

//     useEffect(() => {
//         window.addEventListener('wheel', onMouseWheel, {passive: false})
//         // window.addEventListener('touchstart', startTouchMove, {passive: false})
//         // window.addEventListener('touchmove', onMouseWheel, {passive: false})
//         // window.addEventListener('touchend', endTouchMove, {passive: false})
//     }, [navIsOpen])
//     useEffect(() => {
//         if (navIsOpen) {
//             window.removeEventListener('wheel', onMouseWheel)
//             // window.removeEventListener('touchstart', startTouchMove, {passive: false})
//             // window.removeEventListener('touchmove', onMouseWheel, {passive: false})
//             // window.removeEventListener('touchend', endTouchMove, {passive: false})
//         }
//         return () => window.removeEventListener('wheel', onMouseWheel)
//     }, [navIsOpen])

//     // useEffect(() => {
//     //     return () => window.removeEventListener('touchstart', startTouchMove, {passive: false})
//     // }, [])

//     // useEffect(() => {
//     //     return () => window.removeEventListener('touchmove', onMouseWheel, {passive: false})
//     // }, [])
//     // useEffect(() => {
//     //     return () => window.removeEventListener('touchend', endTouchMove, {passive: false})
//     // }, [])
    
//     useEffect(() => {
//         if (navIsOpen) {
//             timer.current = setTimeout(() => {
//                 setImgDisapear(true)
//             }, 1000)
//         } else {
//             clearTimeout(timer.current)
//             setImgDisapear(false);
//         }
//     }, [navIsOpen])

//     return (
//         pageLoad && !openNavTransiFinish &&
//         <StyledPagePhotography ref={caroussel} navIsOpen={navIsOpen} loadingFinish={loadingFinish} >
//             {imgDisapear === false &&
//                 <div className='caroussel transiOff'>
//                 {projets.edges.map(({ node:projet }) => {
//                     return (
//                         <PhotoItem title1={projet.titreProjet} title2={projet.creditLigne1} slug={projet.slugProjet} alt={projet.principale.alt} src={projet.principale.fluid.src} />
//                     )
//                 })}   
//                 {projets.edges.map(({ node:projet }) => {
//                     return (
//                         <PhotoItem title1={projet.titreProjet} title2={projet.creditLigne1} slug={projet.slugProjet} alt={projet.principale.alt} src={projet.principale.fluid.src} />
//                     )
//                 })}   
//                 {projets.edges.map(({ node:projet }) => {
//                     return (
//                         <PhotoItem title1={projet.titreProjet} title2={projet.creditLigne1} slug={projet.slugProjet} alt={projet.principale.alt} src={projet.principale.fluid.src} />
//                     )
//                 })}   
//                 </div>
//             }
//             <ContainerArrowNav navIsOpen={navIsOpen} loadingFinish={loadingFinish} handleClickNext={handleClickNext} handleClickPrev={handleClickPrev}/>
//             <SvgScrollToAnimate navIsOpen={navIsOpen} loadingFinish={loadingFinish} />
//         </StyledPagePhotography>
//     )
// }

import React, { useRef, useEffect, useState, useContext } from 'react'

import StyledPagePhotography from './StyledPagePhotography';
import { SvgScrollToAnimate } from '../SvgScrollToAnimate/SvgScrollToAnimate';
import { ContainerArrowNav } from '../ContainerArrowNav/ContainerArrowNav';
import { PhotoItem } from '../PhotoItem/PhotoItem';
import Context from '../../utils/context';

export const PagePhotography = ({ projets }) => {
    const { navIsOpen, loadingFinish, openNavTransiFinish, pageLoad } = useContext(Context)
    let caroussel = useRef(null)
    let timer = useRef(null)
    const [carousselScrollLeft, setCarousselScrollLeft] = useState(0)
    const [imgDisapear, setImgDisapear] = useState(false)

    const handleClickNext = (coeff) => {
        //effet smooth à retravailler
        let delta = 1;
        for (let i = 1; i <= 240 * coeff; i++) {
            const currentScrollDelta = caroussel.current.scrollLeft
            setCarousselScrollLeft(currentScrollDelta)
            if (i <= 30 * coeff && i > 0) {
                delta += 0.016
            } else if (i <= 60 * coeff && i > 30 * coeff) {
                delta += 0.023
            } else if (i <= 110 * coeff && i > 60 * coeff) {
                delta += 0.026
            } else if (i <= 120 * coeff && i > 110 * coeff ) {
                delta += 0.029
            } else if (i <= 170 * coeff && i > 120 * coeff ) {
                delta -= 0.029
            } else if (i <= 180 * coeff && i > 170 * coeff) {
                delta -= 0.026
            } else if (i <= 210 * coeff && i > 180 * coeff) {
                delta -= 0.023
            } else if (i <= 240 * coeff && i > 210 * coeff) {
                delta -= 0.016
            }
            caroussel.current.scrollLeft = currentScrollDelta + (delta * 0.60);
        }
    }
    const handleClickPrev = (coeff) => {
        //effet smooth à retravailler
        let delta = 1;
        for (let i = 1; i <= 240 * coeff; i++) {
                const currentScrollDelta = caroussel.current.scrollLeft
                setCarousselScrollLeft(currentScrollDelta)
                if (i <= 30 * coeff && i > 0) {
                    delta += 0.016
                } else if (i <= 60 * coeff && i > 30 * coeff) {
                    delta += 0.023
                } else if (i <= 110 * coeff && i > 60 * coeff) {
                    delta += 0.026
                } else if (i <= 120 * coeff && i > 110 * coeff ) {
                    delta += 0.029
                } else if (i <= 170 * coeff && i > 120 * coeff ) {
                    delta -= 0.029
                } else if (i <= 180 * coeff && i > 170 * coeff) {
                    delta -= 0.026
                } else if (i <= 210 * coeff && i > 180 * coeff) {
                    delta -= 0.023
                } else if (i <= 240 * coeff && i > 210 * coeff) {
                    delta -= 0.016
                }
                caroussel.current.scrollLeft = currentScrollDelta - (delta * 0.60);
        }
    }

    function onMouseWheel(e) {
        e.preventDefault()
        const currentScrollDelta = caroussel.current.scrollLeft
        setCarousselScrollLeft(currentScrollDelta)
        if (e.deltaY !== 0) {
            caroussel.current.scrollLeft = currentScrollDelta + (e.deltaY * 0.60);
        } else {
            caroussel.current.scrollLeft = currentScrollDelta + (e.deltaX * 0.60);
        }
    }
    useEffect(() => {
        if (pageLoad && !navIsOpen) {
            if (caroussel.current.scrollLeft !== null) {
                if (caroussel.current.scrollLeft === 0) {
                    caroussel.current.scrollLeft = caroussel.current.scrollWidth / 3
                } else if (caroussel.current.scrollLeft >= caroussel.current.scrollWidth * 0.67) {
                    caroussel.current.scrollLeft = caroussel.current.scrollWidth / 3
                }
            }
        }
    }, [carousselScrollLeft])

    useEffect(() => {
        window.addEventListener('wheel', onMouseWheel, {passive: false})
    }, [navIsOpen])
    useEffect(() => {
        if (navIsOpen) {
            window.removeEventListener('wheel', onMouseWheel)
        }
        return () => window.removeEventListener('wheel', onMouseWheel)
    }, [navIsOpen])
    
    useEffect(() => {
        if (navIsOpen) {
            timer.current = setTimeout(() => {
                setImgDisapear(true)
            }, 1000)
        } else {
            clearTimeout(timer.current)
            setImgDisapear(false);
        }
    }, [navIsOpen])

    return (
        pageLoad && !openNavTransiFinish &&
        <StyledPagePhotography ref={caroussel} navIsOpen={navIsOpen} loadingFinish={loadingFinish} >
            {imgDisapear === false &&
                <div className='caroussel transiOff'>
                {projets.edges.map(({ node:projet }) => {
                    return (
                        <PhotoItem title1={projet.titreProjet} title2={projet.creditLigne1} slug={projet.slugProjet} alt={projet.principale.alt} src={projet.principale.fluid.src} />
                    )
                })}   
                {projets.edges.map(({ node:projet }) => {
                    return (
                        <PhotoItem title1={projet.titreProjet} title2={projet.creditLigne1} slug={projet.slugProjet} alt={projet.principale.alt} src={projet.principale.fluid.src} />
                    )
                })}   
                {projets.edges.map(({ node:projet }) => {
                    return (
                        <PhotoItem title1={projet.titreProjet} title2={projet.creditLigne1} slug={projet.slugProjet} alt={projet.principale.alt} src={projet.principale.fluid.src} />
                    )
                })}   
                </div>
            }
            <ContainerArrowNav navIsOpen={navIsOpen} loadingFinish={loadingFinish} handleClickNext={handleClickNext} handleClickPrev={handleClickPrev}/>
            <SvgScrollToAnimate navIsOpen={navIsOpen} loadingFinish={loadingFinish} />
        </StyledPagePhotography>
    )
}
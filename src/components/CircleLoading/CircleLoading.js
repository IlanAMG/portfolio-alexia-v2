import React, { useState, useEffect, useRef } from 'react'

import StyledCircleLoading from './StyledCircleLoading';

export const CircleLoading = ({ isVisible }) => {
    const [percentage, setPercentage] = useState(0)
    const [delay, setDelay] = useState(null)

    const onIncrement = () => {
        if (percentage !== 100) {
            setPercentage(percentage => percentage + 1)
            if (percentage >= 0 && percentage <= 42) {
                if (delay >= 20 && delay <= 150) {
                    setDelay(delay => delay * 0.70)
                } else if (delay <= 400) {
                    setDelay(delay => delay * 1.1) 
                } else {
                    setDelay(delay => delay * 0.81) 
                }
            } else if (percentage > 42 && percentage <= 55) {
                setDelay(delay => delay * 1.17)
            } else {
                setDelay(delay => delay * 0.62)
            }
        } 
    }

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(onIncrement, delay)

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setDelay(150)
            }, [200])
        }
    }, [isVisible])

    return (
        <StyledCircleLoading>
            <div className='container-vague'>
                <small className='pourcentage'>{percentage}%</small>
                <svg width="1377" height="847" viewBox="0 0 1177 847" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1176.37 847H0V62.7931C33.7618 36.8751 123.519 -28.6454 191.885 62.7931C291.21 195.755 302.327 -14.7061 385.261 61.8129C569.205 231.574 600.203 -19.0977 729.348 45.1485C833.986 97.2394 938.075 172.366 995.992 62.0089C1060.05 -60.0529 1143.67 30.1309 1176.37 62.7931V847Z" fill="#D1B4FF"/>
                </svg>
            </div>
            <div className='container-small'>
                <small>L<br/>O<br/>A<br/>D<br/>I<br/>N<br/>G</small>
            </div>
        </StyledCircleLoading>
    )
}

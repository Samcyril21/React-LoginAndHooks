import React,{useState,useEffect}from 'react';
import './CountDown.css';


function CountDown() {
    const [countdown, setCountdown] = useState(5); 
    let interval; 

    const startCountdown = () => { 
        interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
            
        }, 1000);
    }

    useEffect(() => {
        if (countdown === 0) {
            clearInterval(interval);
        }
    }, [countdown]);

    return (
        <div id="coutdown-container">
            <p>{countdown}</p>
            <button id="btn" onClick={startCountdown}><b>Start</b></button>
        </div>
    );
}

export default CountDown;
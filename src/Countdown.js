import React, { useState, useRef } from 'react';
import './CountDown.css';

function CountDown() {
  const [countdown, setCountdown] = useState(0);
  const interval = useRef();

  const startCountdown = (value) => {
    clearInterval(interval.current);
    setCountdown(value);

    interval.current = setInterval(() => {
      value--;
      if (value == 0) {
        clearInterval(interval.current);
      }
      setCountdown(value);
    }, 1000);
  };

  return (
    <div id="coutdown-container">
      {countdown >= 10 ? <p>00 : {countdown}</p> : <p>00 : 0{countdown}</p>}
      <input
        id="timeCount"
        placeholder="Enter Seconds.."
        onKeyDown={(e) => {
          e.key == 'Enter' ? startCountdown(e.target.value) : null;
        }}
      />{' '}
      {/* <button onClick={()=>startCountdown()}>Start</button> */}
    </div>
  );
}

export default CountDown;

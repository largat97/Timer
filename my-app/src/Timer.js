import React from 'react';
import './Timer.css';


const MsTime = (ms) => {
  var ms= 1000000;
  const heurs = Math.floor(ms / (1000 * 60 * 60));

  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor(((ms % (1000 * 60 * 60)) % (1000 * 60)) / 1000);
  return (
     heurs + ":" +minutes+ ":" +seconds 
  )
}

const Timer = (ms) =>
    <div className="container">
        <div className="container-timer">
            
          <span>{MsTime(ms)}</span>
        </div>
        <div className="static-timer">
            <span className="text-timer"> Hour</span>
            <span className="text-timer"> Minute</span>
            <span className="text-timer"> Second</span>

        </div>



    </div>



export default Timer;

import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time,setTime]= useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(()=>{
        let timer;
        if(isStarted){
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000);
        }
        else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);

    },[isStarted])

    const startTimer = () => {
        setIsStarted(true);
        
    };

    const pauseTimer = () => {
        setIsStarted(false);
    }


    const resetTimer = () => {
        setIsStarted(false);
        setTime(0);

    };

    return (
        <div>
            <h2>Timer: {time} seconds</h2>
            <button className="btn btn-primary m-2" onClick={startTimer}>Start</button>
            <button className="btn btn-warning m-2" onClick={pauseTimer}>Pause</button>
            <button className="btn btn-danger m-2" onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Timer;
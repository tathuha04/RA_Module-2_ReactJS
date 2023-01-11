import React, { useState } from 'react'

export default function ExUseRef() {
    const [time, setTime] = useState(60);
    let timeId;
    const handleStart = () => {
       timeId = setInterval(() => {
            setTime(preTime => preTime - 1)
        }, 1000);
        console.log("Start --> timeId", timeId);
    }
    const handleStop = () => {
        console.log("Stop --> timeId", timeId);
        clearInterval(timeId);
    }
    return (
        <div>
            <h2>Rikkei Academy - React Hooks - useRef</h2>
            <p>Clock: {time}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    )
}

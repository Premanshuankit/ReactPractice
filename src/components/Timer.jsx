import React, { useState, useRef, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const start = () => {
        if (intervalRef.current) return; // prevent multiple intervals

        intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
        }, 1000);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const reset = () => {
        stop();
        setTime(0);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <>
            <hr />
            <h2>Timer App:</h2>
            <p>{time}</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default Timer;

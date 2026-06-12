import React, { useRef, useState } from "react";

function CustomHooks() {
    const { count, handleIncrease, handleDeccrease, handleReset } = useCounter(0);

    return (
        <div>
        <p>count : {count}</p>
        <button onClick={handleIncrease}> Increase</button>
        <button onClick={handleDeccrease}> Decrease</button>
        <button onClick={handleReset}> Reset</button>
        </div>
    );
}

export default CustomHooks;



function useCounter() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount((prev) => prev + 1);
    }
    function handleDeccrease() {
        setCount((prev) => prev - 1);
    }
    function handleReset() {
        setCount(0);
    }

    return { count, handleIncrease, handleDeccrease, handleReset };
}

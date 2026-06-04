import { useState, useRef, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (inputRef.current) {
    //             inputRef.current.focus()
    //         }
    //     }, 3000)

    //     return () => clearInterval(timer)
    // }, [])

    return (
        <>
            <hr />
            <h2>Current: {count}</h2>
            <h3>Previous: {prevCount.current}</h3>

            <button onClick={() => setCount(c => c + 1)}>
                Increment
            </button>

            <button onClick={() => inputRef.current.focus()}>
                Focus Input
            </button>

            <input ref={inputRef} />
        </>
    );
}

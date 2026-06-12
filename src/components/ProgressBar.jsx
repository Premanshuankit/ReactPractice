import react, { useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    function handleIncrease() {
        setDuration("0.3s");
        setProgress((prev) => Math.min(prev + 10, 100));
    }

    function handleDecrease() {
        setDuration("1s");
        setProgress((prev) => Math.max(prev - 10, 0));
    }

    return (
        <>
            <h3>Progress Meter</h3>
            <div
                style={{
                    border: "1px solid gray",
                    height: "40px",
                    width: "400px",
                    borderRadius: "30px",
                }}>
                <div
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "green",
                        borderRadius: "30px",
                        transition: `${duration}`,
                    }}>
    
                </div>
            </div>
            <p>progress bar is {progress}%</p>

            <button style={{ marginRight: "5px" }} onClick={handleIncrease}>
                Increase
            </button>
            <button onClick={handleDecrease}> Decrease</button>
        </>
    );
}

export default ProgressBar;

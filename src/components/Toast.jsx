import React, { useState } from "react";

function Toast() {
    const [showToast, setShowToast] = useState(false);

    function handleClick() {

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }

    return (
        <>
            <button onClick={handleClick}>
                Show Toast
            </button>

            {showToast && (
                <div
                    style={{
                        position: "fixed",
                        top: "20px",
                        right: "20px",
                        background: "black",
                        color: "cyan",
                        padding: "10px",
                    }}>
                    Success!
                </div>
            )}
        </>
    );
}

export default Toast;
import React, { useEffect, useState } from "react";

function EmojiCounter() {
    const arr = ["👍", "❤️", "😂", "😮"];
    const [count, setCount] = useState({
        "👍": 0,
        "❤️": 0,
        "😂": 0,
        "😮": 0,
    });

    function handleClick(emoji) {
        console.log("clicked");
        setCount((prev) => ({
            ...prev,
            [emoji]: prev[emoji] + 1,
        }));
    }

    return (
        <div>
            {arr.map((emoji) => (
                <span
                key={emoji}
                onClick={() => handleClick(emoji)}
                style={{
                    cursor: "pointer",
                    padding: "10px",
                    fontSize: "30px",
                }}
                >
                {emoji} 
                </span>
            ))}

            <br />
            <br />

            {arr.map((emoji) => (
                <div key={emoji} style={{ paddingBottom: "10px" }}>
                count of {emoji} : {count[emoji]}
                <br />
                </div>
            ))}
        </div>
    );
}

export default EmojiCounter;

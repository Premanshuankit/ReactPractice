import React, { useEffect, useState } from "react";

function ThemeSwitch() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    function handleClick() {
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(localStorage.getItem("theme"));
    }

    return (
        <div
            style={{
                padding: "20px",
                height: "100vh",
                background: theme === "dark" ? "black" : "white",
                color: theme === "dark" ? "white" : "black",
            }}>

            <h3>toggle theme</h3>
            <button onClick={handleClick}>
                switch to {theme === "dark" ? "light" : "dark"} mode
            </button>
        </div>
    );
}

export default ThemeSwitch;


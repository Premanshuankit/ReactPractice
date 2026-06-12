import React, { useRef, useState } from "react";

function OTPInput() {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const inputRefs = useRef([]);

    function handleChange(value, index) {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    function handleKeyDown(e, index) {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    function handlePaste(e) {
        const pastedData = e.clipboardData.getData("text");

        const pastedOtp = pastedData.slice(0, otp.length).split("");

        const newOtp = [...otp];

        pastedOtp.forEach((digit, index) => {
            newOtp[index] = digit;
        });

        setOtp(newOtp);
    }

    return (
        <div>
            <h2>OTP Input</h2>

            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    value={digit}
                    maxLength={1}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        margin: "5px",
                        fontSize: "20px",
                    }}
                />
            ))}

            <h3>OTP: {otp}</h3>
        </div>
    );
}

export default OTPInput;

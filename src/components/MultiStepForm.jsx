import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setformData] = useState({ name: "", email: "" });

  function handleNameChange(e) {
    setformData({
      ...formData,
      name: e.target.value,
    });
  }
  function handleEmailChange(e) {
    setformData({
      ...formData,
      email: e.target.value,
    });
  }

  function handleNext() {
    
    if (step === 1 && formData.name.trim().length < 4) {
      console.log(formData.name.trim().length);
      alert("name must be atleast 4 char ");
      return;
    }

    if (step === 2 && (!formData.email.includes(".") || !formData.email.includes("@"))) {
      alert("Enter Email");
      return;
    }

    setStep((prev) => prev + 1);
  }

  function handlePrev() {
    setStep((prev) => prev - 1);
  }

  return (
    <div>
        <h2>step : {step}</h2>

        {step === 1 && (
            <input
            type="text"
            value={formData.name}
            placeholder="enter name"
            onChange={handleNameChange}
            />
        )}

        {step === 2 && (
            <input
            type="text"
            value={formData.email}
            placeholder="enter email"
            onChange={handleEmailChange}
            />
        )}

        {step === 3 && (
            <>
            <h2>Review</h2>

            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            </>
        )}

        <div>
            <button
                onClick={handlePrev}
                disabled={step === 1}
                style={{ marginRight: "10px", marginTop: "5px" }}
                >
                prev
            </button>
            <button disabled={step === 3} onClick={handleNext}>
                next
            </button>
        </div>
    </div>
  );
}

export default MultiStepForm;

import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

        {isOpen && (
            <div
                onClick={() => setIsOpen(false)}
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                }}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                    background: "white",
                    padding: "20px",
                    width: "300px",
                    margin: "100px auto"}}>
                        <button onClick={() => setIsOpen(false)}>Close</button>

                        <h2>Hello Prem</h2>
                </div>
            </div>
        )}
    </>
  );
}

export default Modal;

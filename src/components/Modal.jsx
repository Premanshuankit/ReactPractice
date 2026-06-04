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
                    // inset: 0,   ///  inset: 0 is a shorthand CSS property.
                    // Instead of writing:
                    // {
                    //   top: 0,
                    //   right: 0,
                    //   bottom: 0,
                    //   left: 0
                    // }

                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
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

import React, { useEffect, useState } from "react";

function Carousel() {
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Image Carousel</h2>

      <img src={images[currentIndex]} alt="carousel" width="600" />

      <br />

      <button onClick={handlePrev}>Prev</button>

      <button onClick={handleNext}>Next</button>

      <div style={{ marginTop: "10px" }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              margin: "0 5px",
            }}
          >
            {currentIndex === index ? "●" : "○"}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  let arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>Star Rating</h2>

      {arr.map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "40px",
            cursor: "pointer",
          }}
        >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}

      <h3>Rating: {rating}</h3>
    </div>
  );
}

export default Rating;

import { useState, useEffect } from "react";

export default function DataTable3() {
  const [rating, setRating] = useState(0);
  const [ratingSum, setRatingSum] = useState(0);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const arr = [1, 2, 3, 4, 5];

  useEffect(() => {
    console.log(rating, " rating");
    console.log(count, "count");
    console.log(ratingSum, " ratingSum ");
  }, [rating]);

  function handleRating(star) {
    const newCount = count + 1;
    const newRatingSum = ratingSum + star;
    const newAverage = (newRatingSum / newCount).toFixed(2);

    setRating(star);
    setCount(newCount);
    setRatingSum(newRatingSum);

    setData((prev) => [
      ...prev,
      {
        count: newCount,
        rating: star,
        ratingSum: newRatingSum,
        average: newAverage,
      },
    ]);
  }
  return (
    <div className="App">
      {arr.map((star) => (
        <span
          key={star}
          style={{
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => handleRating(star)}
        >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
      <br />
      <span>Rated : {rating}</span>
      <div>total number of users rated : {count}</div>
      <div>Avg : {count === 0 ? "0.00" : (ratingSum / count).toFixed(2)}</div>

      <table border="1" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Count</th>
            <th>Rating</th>
            <th>Rating Sum</th>
            <th>Avg</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.count}</td>
              <td>{item.rating}</td>
              <td>{item.ratingSum}</td>
              <td>{item.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

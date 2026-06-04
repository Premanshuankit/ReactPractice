import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  async function apiFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    console.log(result);

    if (result) {
      setData(result);
    }
  }

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <div className="App">
      <ul>
        {data.map((items) => {
          return (
            <li>
              <h2>{items.title}</h2>
              <h6>{items.body}</h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

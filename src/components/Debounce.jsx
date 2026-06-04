import { useEffect, useState } from "react";

function Debounce() {
  const [search, setSearch] = useState("");
  const [delayedSearch, setDelayedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedSearch(search);

      if (search) {
        console.log("API Call:", search);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div>
      <h2>Debounced Search</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Original Search:</h3>
      <p>{search}</p>

      <h3>Delayed Search (500ms):</h3>
      <p>{delayedSearch}</p>
    </div>
  );
}

export default Debounce;

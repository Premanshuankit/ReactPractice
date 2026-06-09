import React, { useEffect, useState } from "react";

function InfiniteScrollPage() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  // API Call
  useEffect(() => {
    fetchItems();
  }, [page]);

  async function fetchItems() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );

      const data = await response.json();

      setItems((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
  }

  // Scroll Listener
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 10) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h2>Infinite Scroll</h2>

      {items.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            margin: "10px",
            border: "1px solid black",
          }}
        >
          <h4>{item.id}</h4>
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
}

export default InfiniteScrollPage;

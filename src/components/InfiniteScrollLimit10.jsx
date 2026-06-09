import React, { useEffect, useState } from "react";

function InfiniteScrollLimit10() {
  const [items, setItems] = useState([]);
  const LIMIT = 10;

  useEffect(() => {
    loadMoreItems();
  }, []);

  async function loadMoreItems() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${items.length}`
      );

      const data = await response.json();

      setItems((prev) => [...prev, ...data.products]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 10) {
        loadMoreItems();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <>
      <h2>Infinite Scroll</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "10px",
            margin: "10px",
            border: "1px solid black",
          }}
        >
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </>
  );
}

export default InfiniteScrollLimit10;

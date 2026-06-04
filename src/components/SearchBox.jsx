import React, { useState, useEffect } from "react";

export default function App() {
    const [search, setSearch] = useState("");

    const fruits = [
        "Apple",
        "Banana",
        "Mango",
        "Orange",
        "Pineapple",
        "Grapes",
        "Strawberry",
        "Watermelon",
        "Papaya",
        "Kiwi",
    ];

    const filteredFruits = fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(search.toLowerCase())
    });
    // console.log(filteredFruits)
    // console.log(deferred)

    return (
        <div style={{ padding: "20px" }}>
        <hr />
        <input
            type="text"
            placeholder="Search fruit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <ul>
            {filteredFruits.map((fruit, index) => {
                return <li key={index}> {fruit}</li>;
            })}
        </ul>
        </div>
    );
}

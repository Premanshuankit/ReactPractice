import React, { useState } from "react";

function KanbanBoard() {
    const [boards, setBoards] = useState({
        todo: [
        { id: 1, title: "Learn React" },
        { id: 2, title: "Learn JS" },
        ],
        inProgress: [],
        done: [],
    });

    function moveCard(card, from, to) {
        setBoards((prev) => ({
        ...prev,
        [from]: prev[from].filter((item) => item.id !== card.id),
        [to]: [...prev[to], card],
        }));
    }

    return (
        <div
            style={{
                display: "flex",
                gap: "20px"}}>

            {Object.keys(boards).map((column) => (
                <div
                    key={column}
                    style={{
                        width: "250px",
                        border: "1px solid black",
                        padding: "20px",
                        margin: '10px'
                    }}>
                    <h3>{column}</h3>

                    {boards[column].map((card) => (
                        <div
                            key={card.id}
                            style={{
                                border: "1px solid green",
                                padding: "10px",
                                marginBottom: "10px",
                            }}>
                            {card.title}

                            {column === "todo" && (
                                <button onClick={() => moveCard(card, "todo", "inProgress")}>
                                →
                                </button>
                            )}

                            {column === "inProgress" && (
                                <button onClick={() => moveCard(card, "inProgress", "done")}>
                                →
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default KanbanBoard;

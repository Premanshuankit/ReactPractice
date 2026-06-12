import react, { useState, useEffect } from "react";

function DataTable() {
    const [search, setSearch] = useState("");
    const [sortAge, setSortAge] = useState("asc");

    const data = [
        { id: 1, name: "ankit", age: 26 },
        { id: 2, name: "rajat", age: 29 },
        { id: 3, name: "shivam", age: 21 },
        { id: 4, name: "ajit", age: 32 },
        { id: 5, name: "radha", age: 16 },
    ];

    const filteredData = data
        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (sortAge === "asc" ? a.age - b.age : b.age - a.age));

    return (
        <>
            <h3>Data Table</h3>

            <input
                type="text"
                value={search}
                placeholder="search name"
                onChange={(e) => setSearch(e.target.value)}
                style={{
                width: "200px",
                height: "20px",
                }}
            />

            <button
                style={{
                    marginLeft: "10px",
                }}
                onClick={() => setSortAge(sortAge === "asc" ? "desc" : "asc")}>
                sort by age
            </button>

            <table border="1" style={{ marginTop: "10px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default DataTable;

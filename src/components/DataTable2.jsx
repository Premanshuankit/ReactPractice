import { useState } from "react";

export default function DataTable2() {
    const [input, setInput] = useState("");
    const [minWeight, setMinWeight] = useState("");
    const [maxWeight, setMaxWeight] = useState("");
    const [sortAge, setSortAge] = useState("asc");

    const style = {
        marginBottom: "20px",
        width: "100px",
        marginRight: "3px",
        display: "inline",
    };

    const data = [
        {
        id: 1,
        fName: "ankit",
        lName: "premanshu",
        age: 29,
        minW: 62,
        maxW: 71,
        },
        {
        id: 2,
        fName: "radha",
        lName: "mallik",
        age: 27,
        minW: 41,
        maxW: 54,
        },
        {
        id: 3,
        fName: "ajit",
        lName: "singh",
        age: 32,
        minW: 59,
        maxW: 67,
        },
        {
        id: 4,
        fName: "radha",
        lName: "bengali",
        age: 44,
        minW: 72,
        maxW: 78,
        },
    ];

    const filteredData = data
        .filter(
        (item) =>
            item.fName.toLowerCase().includes(input.toLowerCase()) ||
            item.lName.toLowerCase().includes(input.toLowerCase())
        )
        .sort((a, b) => (sortAge == "asc" ? a.age - b.age : b.age - a.age))
        .filter((item) => !minWeight || item.minW >= Number(minWeight))
        .filter((item) => !maxWeight || item.maxW <= Number(maxWeight));

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleMinWeight(e) {
        setMinWeight(e.target.value);
        console.log(e.target.value);
    }
    function handleMaxWeight(e) {
        setMaxWeight(e.target.value);
    }

    return (
        <div className="App">
            <div style={{ display: "inline" }}>
                <input
                style={style}
                placeholder=" fName/Name"
                value={input}
                onChange={handleChange}
                />

                <input
                style={style}
                placeholder="enter min weight"
                value={minWeight}
                onChange={handleMinWeight}
                />

                <input
                style={style}
                placeholder="enter max weight"
                value={maxWeight}
                onChange={handleMaxWeight}
                />

                <button onClick={() => setSortAge(sortAge === "asc" ? "desc" : "asc")}>
                sort by age
                </button>
            </div>

            <div>
                <table border="2">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>age</th>
                        <th>Min Weight</th>
                        <th>Max Weight</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.fName}</td>
                            <td>{item.lName}</td>
                            <td>{item.age}</td>
                            <td>{item.minW}</td>
                            <td>{item.maxW}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

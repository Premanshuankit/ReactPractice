import { useState } from "react";

function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (input.trim() === "") {
      alert("Please enter something");
      return;
    }

    setTodos([
      ...todos,
      {
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  function completeTodo(index) {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function editTodo(index) {
    const updatedText = prompt("Edit Todo", todos[index].text);

    if (updatedText === null || updatedText.trim() === "") {
      return;
    }

    const updatedTodos = [...todos];
    console.log(updatedText, "updatedText");
    console.log(updatedTodos, "updatedTodos");
    updatedTodos[index].text = updatedText;
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        value={input}
        placeholder="Enter todo"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      {/* <hr /> */}

      {todos.map((todo, index) => (
        <div key={index}>
          <span
            onClick={() => completeTodo(index)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "30px",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => editTodo(index)}>Update</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;

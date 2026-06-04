import { useState } from "react";

function TodoEmoji() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [showIcons, setShowIcons] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const arr = ["👍", "❤️", "😂", "😮"];

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handlePost() {
    const value = Number(input);

    if (value < 1 || value > 4) {
      alert("Enter a number between 1 and 4");
      return;
    }

    setPosts([...posts, input]);
    setInput("");
  }

  function handleDelete(index) {
    setPosts(posts.filter((_, i) => i !== index));
  }

  function handleEmojiSelect(icon) {
    setPosts(
      posts.map((post, index) => (index === selectedPost ? icon : post))
    );

    setShowIcons(false);
    setSelectedPost(null);
  }

  return (
    <div>
      <h3>Add Something</h3>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter 1-4"
      />

      <button onClick={handlePost}>Post</button>

      <hr />

      {posts.map((item, index) => (
        <div key={index}>
          <span
            style={{
              cursor: "pointer",
              marginRight: "100px",
              fontSize: "20px",
            }}
            onClick={() => {
              setSelectedPost(index);
              setShowIcons((prev) => !prev);
            }}
          >
            {item}
          </span>

          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}

      {showIcons && (
        <div style={{ marginTop: "20px" }}>
          {arr.map((icon, index) => (
            <span
              key={index}
              style={{
                fontSize: "24px",
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleEmojiSelect(icon)}
            >
              {icon}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoEmoji;

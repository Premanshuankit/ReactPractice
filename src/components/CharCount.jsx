import { useState } from "react";

function CharCount() {
  const [text, setText] = useState("");

  const char = text.length;

  const words = text.trim() === "" ? 0 : text.trim().split(" ").length;

  return (
    <div style={{ paddingTop: "20px" }}>
      <h2>character count :</h2>
      <textarea
        rows="6"
        cols="40"
        type={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p> total char : {char} </p>
      <p> total words : {words} </p>
    </div>
  );
}

export default CharCount;

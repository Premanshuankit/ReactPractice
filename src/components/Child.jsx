import React from "react";

function Child({ onClick , style}) {
  console.log("Child rendered");
  return (
    <button style = {{...style, color: 'green'}} onClick={onClick}>Child</button>
  )
}

export default React.memo(Child);

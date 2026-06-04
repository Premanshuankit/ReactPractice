import { useState, createContext, useContext } from "react";

const nameContext = createContext();

function App() {
  return (
    <div>
      <nameContext.Provider value="ankit">
        <Show />
      </nameContext.Provider>
    </div>
  );
}

export default App;

function Show() {
  const name = useContext(nameContext);
  return <p> hello {name}</p>;
}

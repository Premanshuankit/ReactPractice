import { useState, useCallback } from "react";
import Child from "./components/Child";
import Timer from "./components/Timer";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
import ContextApi from "./components/ContextApi";
import Counter from "./components/Counter";
import FormValidation from "./components/FormValidation";
import AutoFocusNext from "./components/AutoFocusNext";
import SearchBox from './components/SearchBox'
import Toggle from "./components/Toggle";
import StateLiftingUpA from "./components/StateLiftingUpA";
import StateLiftingUpB from "./components/StateLiftingUpB";
import Debounce from "./components/Debounce";
import Throttling from "./components/Throttling";
import TodoEmoji from "./components/TodoEmoji";
import PasswordStrength from "./components/PasswordStrength";
import CharCount from "./components/CharCount";
import CounterWithHistory from "./components/CounterWithHistory";
import TodoApp from "./components/TodoApp";
import Accordian from "./components/Accordian";
import Modal from "./components/Modal";
import TabsComponent from "./components/TabsComponent";
import Rating from "./components/Rating";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('')
  const [type, setType] = useState('')

  const handleChild = useCallback(() => {
    console.log("handleClick, inside App.jsx");
  }, [])

  const handleCount = () => {
    console.log("handleCount");
    setCount(count + 1);
  }
  const handleInput = (e) => {
    console.log('input type text')
    setText(e.target.value)
  }
  return (
    <>
      <PasswordGenerator />
      {/* <Rating /> */}
      {/* <TabsComponent /> */}
      {/* <Modal /> */}
      {/* <Accordian /> */}
      {/* <Debounce /> */}
      {/* <TodoApp /> */}
      {/* <CounterWithHistory /> */}
      {/* <CharCount /> */}
      {/* <PasswordStrength /> */}
      {/* <TodoEmoji /> */}
      {/* <ApiFetch /> */}
      {/* <ContextApi /> */}
      {/* <p>{count}</p> */}
      {/* <input type='text' value = {text} onChange = {handleInput}/> */}
      {/* <button onClick={handleCount}>Click me</button> */}

      {/* <Child onClick={handleChild} /> */}
      {/* <Child style={{borderColor: 'red'}} /> */}
      <hr />
      {/* <h1>lifting in the parent : {type}</h1> */}
      {/* <StateLiftingUpA  type={type} setType = {setType}/> */}
      {/* <StateLiftingUpB type = {type}/> */}

      {/* <Timer /> */}
      {/* <Counter /> */}
      {/* <FormValidation /> */}
      {/* <AutoFocusNext /> */}
      {/* <SearchBox /> */}
      {/* <Toggle /> */}
      {/* <Debounce /> */}
      {/* <Throttling /> */}
    </>
  );
}

export default App;

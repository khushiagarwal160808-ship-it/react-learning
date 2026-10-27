import { useState } from 'react';


function LearnEvent() {
  

  const [text, setText] = useState("");


  function handleClick() {
    alert("Button Clicked!");
  }


  function handleChange(e) {
    setText(e.target.value);
  }


  function handleClear() {
    setText("");
  }


  return (
    <div>
      {/* Click */}
      <button onClick={handleClick}>ShowAlert</button>


      {/* onChange */}
      <input type="text" value={text} onChange={handleChange} />
      <h1>{text}</h1>


      <button onClick={handleClear}>ClearAll</button>
    </div>
  );
}


export default LearnEvent;
/**
 * Event handling in React is the process of responding to user interactions, such as clicks, input changes, and form submissions. 
 * React provides a way to handle events using event handlers, which are functions that are called when a specific event occurs.
 * 
 */
 /*
   * Normal - js - click
   * React - js - onClick, onInput, onChange, onSubmit, onKeypress, onMouseover
   */

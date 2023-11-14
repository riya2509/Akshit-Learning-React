import { useState } from "react";

// Test ia a normal function
function Test() {
  const [task, setTask] = useState(``);
  //   const handlesetTask = (e) => {
  //     setTask(e.target.value);
  //     // console.log(e.target.value);   cuz it's not needed to print on the screen
  //   };
  return (
    <div>
      <input
        className="write"
        type="text"
        // value={task}
        onChange={(e) => setTask(e.target.value)} //calling the single liner function
      />
      <h2>{task.toUpperCase()}</h2>
    </div>
  );
}

export default Test;

// const funct = ()=>{

// } arrow function

import { useState } from "react";

function Lifecycle() {
  //  scope {for loop {} for {}}
  // const [getter,setter]= useSate()-> inside useState() we give the initial value
  //   const [first, setfirst] = useState("");
  //   const [second, setSecond] = useState("");

  const [akshit, setAkshit] = useState("infinity");
  //   useEffect(() => {
  //     // mount
  //     console.log(1);
  //     // unmount
  //     return () => {};
  //   }, []);
  //   useEffect(() => {
  //     // If there is something in dependency array, then it is called compnonent update
  //     console.log("You are typing in second box");
  //   }, [second]);
  //   console.log(2);
  return (
    <div>
      {/* <input
        type="text"
        value={first}
        onChange={(e) => setfirst(e.target.value)}
      /> */}
      <input type="text" value={akshit} onChange={setAkshit("aksh")}></input>
      {/* <input
        type="text"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      /> */}
    </div>
  );
}

export default Lifecycle;

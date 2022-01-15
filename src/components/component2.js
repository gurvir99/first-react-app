import {useState} from "react";
import '../App.css';

function App2() {

    //using useState to execute some code when an element's state changes
    const [isBlue, setBlue] = useState(false);
    const [count, setCount] = useState(0);
    const increment = () =>{
      setCount(count+1);
      setBlue(!isBlue);
    }

    const type = () => {
      console.log("10");
    };
  
    return (
      <div>
        <h2>Hello</h2>
        <button onClick={type}>click</button>
        <h2>+++++++++++++++++++++</h2>
        <h2 className={isBlue ? "blue" : ""}>Change my colour.</h2>
        <h2>+++++++++++++++++++++</h2>
        <button onClick={increment}>Increment Count</button>
        <h2>{count}</h2>
      </div>
    );
  }
  
  export default App2;
  
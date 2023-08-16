import axios from "axios";

import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [quote,setQuote] = useState([])

  function inc(e) { 
    console.log(count)
    e.preventDefault();    
    setCount(count + 1);
    if(count==4)
    {
       let quote = myapi()
      
    }
  }

  function dec() {
     
     setCount(count > 0 ? count - 1 : 0)
  }

  let api =  "https://api.quotable.io/quotes/random"


  function myapi(){
    axios.get(api)
    .then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="counter-widget">
      <div className="count">{count}</div>
      <button className="increment" onClick={inc}>
        Increment
      </button>
      { (count==0)?
      <button className="decrement" disabled  onClick={dec}>

        
        Decrement
      </button>:<button className="decrement"  onClick={dec}>

        
Decrement
</button>}

          <div>

               

             {/* <div className="quote">Random Quote: {quote}</div> */}
          </div>

  </div>

        

  );
}

export default App;

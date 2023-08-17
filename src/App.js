import axios from "axios";

import React, { useEffect, useState } from "react";
import "./style.css";

function App() {

  const [count,setCount] = useState(0)
  const [quote,setQuote] = useState("")
  useEffect(()=>{
    if(count == 5 || count == 10)
    axios.get("https://api.quotable.io/quotes/random")
    .then((res)=>
    {
      console.log(res.data)
      setQuote(res.data[0].content)
    })
    else{
      setQuote("")
    }

    
  },[count])

function inc()
{
  
  setCount(count + 1)
}
function dec(){
  setCount(count <= 0 ? 0 : count -1)
}
  
  return (
    <div className="counter-widget">
      <div className="count">{count}</div>
      <button className="increment" onClick={inc}>
        Increment
      </button>
      { (count==0)?
      <button className="decrement" disabled  onClick={inc}>        
        Decrement
      </button>:<button className="decrement"  onClick={dec}>       
Decrement
</button>

}
<div className="quote">  {`${quote}  Random quote : No quote available`}   </div>
          

  </div>        

  );
}

export default App

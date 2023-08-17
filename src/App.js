import axios from "axios";

import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [quote,setQuote] = useState('')

  function inc() { 
    console.log(count)
         
    
     if(count == 4 || count == 9)
    {
      
      myapi()
    }  
   if(count < 10)
   {
    setCount(count + 1);

    
    setQuote(" ")
    
   }
    
  }
    

  function dec() {
     
     setCount(count > 0 ? count - 1 : 0)
     if(count == 4 || count == 9)
     {
       myapi()
     }  
    if(count < 10)
    {
     setQuote(" ")
     
    }
     
  }

  let api =  "https://api.quotable.io/quotes/random"


  function myapi(){
    axios.get(api)
    .then((res)=>{
      
      setQuote(res.data[0].content) 
      
    })
   console.log(quote)
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
<div className="quote">Random Quote: {quote}  </div>
          

  </div>

        

  );
}

export default App

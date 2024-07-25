'use client';
import React from 'react'


const Counter = ({}) => {
    const [count, setCount] = React.useState(0)
    function incrementCount (){
        setCount((prevCount)=> prevCount +1)
    }
    
    function decrementCount (){
      setCount((prevCount)=> prevCount -1)
    }
  return (
    <div>

<button onClick={()=>incrementCount()}>+</button>
        <p>Kanter! {count}</p>
    
    <button onClick={()=>decrementCount()}>-</button>
    </div>
  );
};

export default Counter
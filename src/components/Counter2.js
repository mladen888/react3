'use client';
import React, {useContext} from 'react'
import {CounterContext2} from '@/pages/index.js'
const Counter2 = () => {
    const [count, setCount] = useContext(CounterContext2)
   
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

export default Counter2    
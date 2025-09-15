import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count,setCount]=React.useState(0);
    const [name,setName]=React.useState("jihan");
    console.log(count);
    const Toggle=()=>{
        setName(name==="jihan"?"hello":"jihan")
        

    }
  return (
    <div>
{count}
<button onClick={()=>setCount(prev=>prev+1)}>+</button>
<button onClick={()=>setCount(prev=>prev-1)}>-</button>
<button onClick={()=>Toggle()}>{name}</button>


<h1>{count} </h1>
    </div>
  )
}

export default Counter
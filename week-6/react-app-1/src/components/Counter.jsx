import { useState } from "react";

function Counter() {
    //state
    const [count,setCount]=useState(0) //this hook(function) is used to rerender the component

    //functions to modify the state
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=(value)=>{
        setCount(value)
    }

    return (
        <div className="text-center p-10 border m-10">
            <h1 className="text-6xl" >Count:{count}</h1>
            <button className=" bg-green-600 p-5 mr-5 " onClick={increment}>+</button>
            <button className="bg-red-600 p-5" onClick={decrement}>-</button>
            <button className="bg-violet-600 p-5" onClick={()=>reset(value)}>-</button>
        </div>
    )
}

export default Counter
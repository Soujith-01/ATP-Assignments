import { useContext } from "react"
import ContextProvider1, { counterContextObj } from "./contexts/ContextProvider1"

function App() {
  const {counter1,increment,decrement}=useContext(counterContextObj)
  //console.log(counter1)
  return (
    <div>
      <ContextProvider1 />
      <div className="grid lg:grid-cols-2 m-20 sm:grid-cols-1 p-10 ">
      <div className="p-10 text-center ml-20 border ">
        <h1 className="text-3xl ">EditCounter1</h1>
        <h1 className="text-3xl mt-3">{counter1}</h1>
        <button onClick={increment} className="bg-green-600 p-4 mt-3 ">+</button>
        <button onClick={decrement} className="bg-red-600 p-4 ml-4">-</button>
      </div>
      <div className="p-10 text-center ml-20 border">
        <h1 className="text-3xl">EditCounter2</h1>
        <h1 className="text-3xl mt-3">{counter1}</h1>
        <button onClick={increment} className="bg-green-600 p-4 mt-3 ">+</button>
        <button onClick={decrement} className="bg-red-600 p-4 ml-4">-</button>
      </div>
      <div className="p-10 text-center ml-20 mt-5 border">
        <h1 className="text-3xl">EditCounter3</h1>
        <h1 className="text-3xl mt-3">{counter1}</h1>
        <button onClick={increment} className="bg-green-600 p-4 mt-3">+</button>
        <button onClick={decrement} className="bg-red-600 p-4 ml-4">-</button>
      </div>
      <div className="p-10 text-center ml-20 mt-5  border">
        <h1 className="text-3xl">EditCounter4</h1>
        <h1 className="text-3xl mt-3">{counter1}</h1>
        <button onClick={increment} className="bg-green-600 p-4 mt-3">+</button>
        <button onClick={decrement} className="bg-red-600 p-4 ml-4">-</button>
      </div>  
      </div>

    </div>
  )
}

export default App
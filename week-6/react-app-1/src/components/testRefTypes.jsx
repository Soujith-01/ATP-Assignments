import { useState } from "react";

function TestRefTypes() {
    const [user,setUser]=useState({username:"soujith",age:19,city:"hyd"})
    const [marks,setMarks]=useState([10,20,30])

    const updateUser=()=>{
        setUser({...user,username:"sunny",age:20})
    }

    const updateMarks=()=>{
        setMarks([...marks,40])
    }
    

    return(
        <div className="text-center mt-8">
            <p className="text-3xl">username:{user.username}</p>
            <p className="text-3xl">age:{user.age}</p>
            <p className="text-3xl">city:{user.city}</p>

            <button className="bg-amber-700 text-3xl m-5 p-5" onClick={updateUser}>
                Update User
            </button>

            {
                marks.map(mark=>(<p>{mark}</p> ))
            }

            <button className="bg-green-400 text-4xl" onClick={updateMarks}>Update Marks</button>
        </div>
    )
}


export default TestRefTypes
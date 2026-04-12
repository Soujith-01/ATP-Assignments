import { use } from "react";
import { useEffect, useState } from "react";


// function APIDemo(){
//     let [count,setCount]=useState(1);
//     const changeCount=()=>{
//         setCount(count+1)
//     }

//     //useeffect function is used for executing side effects i.e for making any requests that is outside react
//     useEffect(()=>{
//         console.log("Use effect executed")
//     },[]) //if we not passed the dependency array the se effect will excute whenever the state changes
    
//     console.log("API demo rendered")

//     //MAking API req need to be in waiting until initial rendering is done
//     //flow when useEffect is used
//         //Inital render-->display-->API req-->rerender-->disaply
    
//     return(
//         <div className="text-center">
//             <p>Count:{count}</p>
//             <button className="text-4xl bg-amber-800" onClick={changeCount}>Update count</button>
//         </div>
//     ) 
//}

function APIDemo(){
    console.log("API demo rendered")
    let [users,setUsers]=useState([])
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState(null)

    useEffect(()=>{
        //a function to make API request
        async function getData(){
            //set Loading state to true
            setLoading(true)
            try{    
                let res=await fetch("https://jsonplaceholder.typicode.com/comments")
                let UsersList=await res.json()
                //update state
                setUsers(UsersList)
            }catch(err){
                console.log("error is ",err)
                setError(err)
            }
            finally{
                setLoading(false)
            }
            }
            //function call
            getData()
        },[])
        //deal with loading state
        if(loading){
            return <p className="text-center text-4xl ">Loading...</p>
        }

        //deal with error state
        if(error!=null){
            return <p className=" text-center text-4xl text-red-700">{error.message}</p>
        }
        return (
            <div className="text-center mt-4">
                <h1 className="text-4xl text-pink-400">List Of Users</h1>
                <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        users.map((userObj)=>(
                            <div key={userObj.id}>
                                <p>{userObj.name}</p>
                                <p>{userObj.email}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
}



export default APIDemo
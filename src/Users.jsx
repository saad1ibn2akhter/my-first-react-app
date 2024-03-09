// import { useEffect, useState } from "react"
// export default function USers(){
//     const [users , setUsers] = useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setUsers(data))
//     },[]);
//     return(
//         <div>Hello , Users length : {users.length}</div>
//     )
// }
import { useEffect, useState } from "react"

export default function users(){
    const [users ,setusers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setusers(data))
    },[]);

    return(
        <div>
            <h1>Users : {users.length}</h1>
        </div>
    )
}
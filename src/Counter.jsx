// import { useState } from "react"
// export default function Counter()
// {
//     const [count ,setCount] = useState(0);
//     const handleAdd = () =>{
//         const newCount = count+1;
//         setCount(newCount);
//     }

//     // const [reduce , reCount] = useState(count);
//     const reduceAdd = () =>{
//         const newCount = count -1;
//         setCount(newCount);
//     }
//     return(
//         <div style={{border: '2px solid violet'}}> 
//             <h3>Counter : {count}</h3>
//             <button onClick={handleAdd}>Add</button>
//             <button onClick={reduceAdd}>Reduce</button>
//         </div>
//     )
// }
import { useState } from "react";

export default function Counter(){
    const [count , setCount] = useState(0);

    const add = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const reduce = () =>{
        const newCount = count -1;
        setCount(newCount);
    }
    return(
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}
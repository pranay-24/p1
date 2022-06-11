import React,{useState} from'react'

export default function Accordian()
{ const [count,setcount]=useState(0);
    const handleclick=()=>{
       let count1=count+1;
        setcount(count1);
    }
    const handleclick1=()=>{
        let count1=0;
         setcount(count1);
     }
    return(
<div>
<button type="button" class="btn btn-secondary" onClick={handleclick}>increase</button>
<button type="button" class="btn btn-secondary" onClick={handleclick1}>Reset</button>
<h1>{count}</h1>

    </div>
    


)
}
import React, { useState } from 'react'

export default function Multicounter() {

    const [qty1,setqty1]=useState(0)
    const [qty2,setqty2]=useState(0)
    const [qty3,setqty3]=useState(0)
  
      return (
  
    <div>
        <button disabled={qty1<1} onClick ={()=>{setqty1(qty1-1)}}>-</button>
        <span>{qty1}</span>
        <button onClick ={()=>{setqty1(qty1+1)}}>+</button>
        <br></br>
        <button disabled={qty2<1} onClick ={()=>{setqty2(qty2-1)}}>-</button>
        <span >{qty2}</span>
        <button onClick ={()=>{setqty2(qty2+1)}}>+</button>
        <br></br>
        <button disabled={qty3<1} onClick ={()=>{setqty3(qty3-1)}}>-</button>
        <span>{qty3}</span>
        <button onClick ={()=>{setqty3(qty3+1)}}>+</button>
        <br></br>
        

    </div>
  )
}

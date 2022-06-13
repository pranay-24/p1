import React from 'react'
import Alert from '../components/Alert';
import {useState} from 'react'

export default function Alertest()
{
    const [alert,setalert]=useState(null)
   
    const showalert=()=>{
  setalert("Primary")
  setTimeout(() => {
      setalert(null)
  }, 2000);
    }
  const handleclick=()=>{
    showalert();
  }

   return(
    <div>
     
<Alert alert={alert} /> 
<button type="button" className="btn btn-secondary" onClick={handleclick}>generate alert</button>
</div>
   ) 

}
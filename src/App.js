
import './App.css';
import Accordian from './components/Accordian';
import Alert from './components/Alert';
import React,{useState} from 'react'

function App() {
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
    
  return (
    <div >
      <Alert />
     {/* <div>{showalert("primary")}</div>  */}
      <button type="button" className="btn btn-primary" onClick={handleclick}>generate alert</button>
     <Accordian/>
  
    </div>
  );
}

export default App;

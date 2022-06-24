
import './App.css';
import Accordian from './components/Accordian';
import Alertest from './components/Alertest';
import Form from './components/Form';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Samples from './components/Multicounter';

import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";
import News from './components/News';
import Multicounter from './components/Multicounter';

function App() {

    
  return (
    <div >
      
      <Router>
      <Navbar/>
  
      
     {/* <div>{showalert("primary")}</div>  */}
      
     
    
      <div>
      <Routes>
      
          <Route path="/accordian" element={<Accordian/>} />
          <Route path="/alertest" element={<Alertest/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/news" element={<News/>}/>
          <Route path="/multicounter" element={<Multicounter/>}/>

      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

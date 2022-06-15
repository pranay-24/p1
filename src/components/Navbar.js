import React from'react'
import { Link,BrowserRouter as Router } from 'react-router-dom'

export default function Navbar()
{
    return(
       
        <div>

        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
 
          <Link className="nav-link active" to="/accordian">Counter</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link active" to="/alertest">Alert</Link>
        </li>

<li className="nav-item">
  <Link className="nav-link active" to="/form">Form</Link>
</li>

       
      </ul>
      
    </div>
  </div>
</nav>

</div>

    )
}
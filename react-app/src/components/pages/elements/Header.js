import React from 'react'
import {Link} from "react-router-dom";
function Header() {
  return (
    <>
    <div className='col-lg-3'>
   
    </div>
    <div className='col-lg-6'>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link to={`/`} className="nav-link"> Home </Link>
          </li>
          <li className ="nav-item">
          <Link to={`/products`} className="nav-link"> Products </Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">                  
            <Link to="/contact" className="nav-link" >Contact Us </Link>
          </li>                
        </ul>
      </div>
    </div>
    
    
  </>
  )
}

export default Header
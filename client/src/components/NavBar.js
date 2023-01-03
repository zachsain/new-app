import React, {useState} from 'react'
import { Link } from "react-router-dom"
import '../App.css'

function NavBar ({user, setUser}) {
 return (
  <div className="container">
    {/* <div className='nav-btn'> */}
    <ul>
      <li className="nav-link"> <Link to="/">Home</Link> </li>
      <li className="nav-link"> <Link to="/profile">Profile</Link> </li>
      <li className="nav-link"> <Link to="/stockform">Add New Stock</Link> </li>
      <li className="nav-link"> <Link to="/logout">Logout</Link> </li>
    </ul>
  </div> 
    
 )
}
  //   <div>
  //   <Link to="/">Home</Link>
  //  </div> 
  //   <div className="nav-btn"> 
  //   <Link to="/posts">Posts</Link>
  //    </div> 
  //    <div className="nav-btn"> 
  //   <Link to="/search">Search</Link>
  //    </div> 
  //    <div className="nav-btn"> 
  //   <Link to="/logout">Logout</Link>
  //    </div> 
export default NavBar
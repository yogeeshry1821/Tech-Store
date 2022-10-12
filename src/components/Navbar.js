import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'
import logo from "../data/data.json"
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img id="logoImage" src={logo} alt="ssd"/>
        </Link>
      </div>
        <Link to="/miphones" className="navlinks">MI Phones</Link><span>|</span>
        <Link to="/redmiphones" className="navlinks">REDMI Phones</Link><span>|</span>
        <Link to="/tv" className="navlinks">TV</Link><span>|</span>
        <Link to="/Laptops" className="navlinks">LAPTOPS</Link><span>|</span>
        <Link to="/lifestyle" className="navlinks">Lifestyle</Link><span>|</span>
        <Link to="/Home" className="navlinks">Home</Link><span>|</span>
        <Link to="/accessories" className="navlinks">Accessories</Link>
        <div className="searchBox">
          <input type="text" name="search" placeholder="Search Products"  />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,100,0,0" />
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
      
  )
}

export default Navbar
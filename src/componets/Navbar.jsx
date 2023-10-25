import React from 'react';
import Logo from "../images/logo.png";
import { useState, useEffect } from "react";
import Profile from "../componets/user/Profile.jsx";
import { Link } from "react-router-dom";


const Navbar = () => {
   const [open, setOpen] = useState(false)

   return (
   <div style={{display: "flex"}}>
      <h1 style={{width: 100,backgroundColor: "red"}}><Link to="/">WANG</Link></h1>
      <input type="SEARCH" style={{flex: 2}} />
      <div className="acc" onClick={()=>setOpen(!open)}>
         <img src={Logo} style={{width: 20}} alt="" />
      </div>
      {open && <Profile />}
   </div>
   )
}
export default Navbar;
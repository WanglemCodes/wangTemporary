import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
   
   return (
      <div>
         <h1>Login</h1>
         <form action="">
            <input required type="email" />
            <input required type="phone" />
            <input required type="password" />
            <button>Login</button>
            <p>Error</p>
            <span>You don't have account? <Link to="/register">Register</Link></span>
         </form>
      </div>
   )
}

export default Login;
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
   const [inputs, setInputs] = useState({
      name:'',
      phone:'',
      gmail:'',
      password:''
   })

   const handleChange = e => {
      setInputs({...prev, [e.target.name]: e.target.value})
   }
   return (
      <div>
        <h1>Login</h1>
         <form action="">
            <input required type="username" name="name" onChange={handleChange} />
            <input required type="email" name="phone" onChange={handleChange} />
            <input required type="phone" name="gmail" onChange={handleChange} />
            <input required type="password" name="password" onChange={handleChange} />
            <button>Register</button>
            <p>Error</p>
            <span>already have account? <Link to="/login">Login</Link></span>
         </form>
      </div>
   )
}

export default Register;
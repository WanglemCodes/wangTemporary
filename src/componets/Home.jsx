import React from 'react';
import Daily from '../componets/daily/Daily.jsx'
import {Link} from "react-router-dom";
import {useState, useEffect, } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios';


const Home = () => {

   
   let id = '1694775837039.jpg'
   let img = require(`../images/${id}`)

   const [posts, setPosts] = useState([])

   const location = useLocation();
   console.log(location)
   const navigate = useNavigate();

   const postId = location.pathname.split("/")[2]

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await axios.get("http://localhost:3900/api/post/")
            setPosts(res.data)
            console.log(res.data)
         }catch(err){
            console.log("this error", err)
         }
      };
      fetchData();
   },[0])

   const handleDelete = async (id) => {
      try {
         await axios.delete("http://localhost:3900/api/posts/"+id)
         navigate("/")
      }catch(err){
         console.log("can't delete", err)
      }
   }

   


   return (
   <div className='home'>
      <div className="intro">
         <img src={img} alt="" style={{width : 50, height : 50}} />
         <h1>Hi! It's me Lol<br />
            I'm a full stack Web Developer<br /> 
            And I'm excited to create any Dynamic and Static Web Application.<br />
            You can examine my skill looking at my this very own created website and some of my applications below.<br />
         </h1>
      </div>
      <div className="list">
         <h1>My works</h1>
         <br />
         <h2>Blog Application</h2>
         <Link to={"/blog"}>Check</Link>
         <h2>Daily Post Application</h2>
         <Link to="/daily">Check</Link>
      </div>
      <div className="data">
         {posts.map((posts)=>(
            <div key={posts.id}>
              <div><img src={require(`../images/${posts.users}`)} alt="" style={{width : 50, height : 50}} /></div>
              
               <button onClick={()=>handleDelete(posts.id)}>Delete</button>
            </div>
         ))}
      </div>
      <div className="feed">
         <h1>Feedback</h1>
         <h1>Rating</h1>
      </div>
   </div>
   )
}
export default Home;
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import "./BLog.scss";

const Blog = () => {

   const [title, setTitle] = useState("")
   const [file, setFile] = useState()

   const upload = async () => {
      try {
         const formData = new FormData()
         formData.append('file', file)
         const res = await axios.post("http://localhost:3900/upload", formData)
         console.log(res.data)
         return res.data
      }catch(err) {
         console.log("lol",err)
      }
   }

   const handleClick = async (e) => {
      e.preventDefault()
      //upload()
      const imgUrl = await upload()
      try {
         await axios.post("http://localhost:3900/api/posts", {
            title,
            url: file ? imgUrl: ""
            //date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
         })
      } catch (err) {
         console.log("err", err)
      }
   }

   const filename = "1694773763269dbgt.jpg";
   const handleDelete = async () => {
      try {
         const res = await axios.delete(`http://localhost:3900/delete/fs`)
         
      }catch(err){
         console.log("can't delete", err)
      }
   }

   return (
      <><div className='blog'>
         <div className="upload">
            <h1>Title</h1>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <h1>Picture</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
            <button onClick={handleDelete}>Delete</button>
         </div>
      </div>
      </>
   )
}

export default Blog;
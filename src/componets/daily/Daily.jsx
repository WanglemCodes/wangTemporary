import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Daily = () => {
   const [posts, setPosts] = useState([]);
   const [img, setImg] = useState()

   /*const upload = async (e) => {
      const file = e.target.files[0]
      const base64 = await convertBase(file)
      console.log(base64)
      setImg(base64)
      
   }
/*
   const convertBase = (file) => {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader()
         fileReader.readAsArrayBuffer(file)

         fileReader.onload = () => {
            resolve(fileReader.result);
         };

         fileReader.onerror = (error) => {
            reject(error)
         }
      })
   }*/


   const handleDelete = async (id) => {
      e.preventDefault()
      try {
         await axios.delete("")
      } catch (err) {
         console.log("Can't Delete", err)
      }
   }

   useEffect(() => {
      const fetchData = async() => {
         try {
            const res = await axios.get("http://localhost:3900/api/post/")
            
            setPosts(res.data)
            console.log(res.data)
         } catch (err) {
            console.log("err", err)
         }
      }
      fetchData()
   },[0])
   useEffect(()=> {
      const image = async() => {
         try {
            const res = await axios.get("http://localhost:3900/api/post/blob/image/")

            setImg(res.data)
            console.log(res.data)
         } catch (err) {
            console.log("err", err)
         }
      }
      image()
   
   },[0])

   const handleUpload = async (e) => {
      e.preventDefault()
      try {
         const formData = new FormData()
         formData.append('file', img)
         const res = await axios.post("http://localhost:3900/api/post/image/", formData )
         console.log(img)
         return res.data
      }catch(err) {
         console.log("lol",typeof formData)
         console.log(img)
      }
   }

   return (
      <div>
        <h1>Daily posts</h1>
        
        {posts.map((post)=>(
         <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <button onClick={()=>handleDelete(post.id)}>Delete</button>
            <button>Update</button>
         </div>
        ))}
        <div>
         <input type="file" onChange={(e) => setImg(e.target.files[0])} />
         <button onClick={handleUpload}>Upload</button>
         <br />
         <img src={img} alt="" height="200px" />
        </div>
      </div>
   )
}

export default Daily;
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom'


const Img = () => {
   
   const [pics, setPics] = useState([])
   const [img, setImg] = useState()
   const [title,setTitle] = useState()
   const navigate = useNavigate();

   const upload = async (e) => {
      const file = e.target.files[0]
      const base64 = await convertBase(file)
      console.log(base64)
      setImg(base64)
      
   }

   const convertBase = (file) => {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader()
         fileReader.readAsDataURL(file)

         fileReader.onload = () => {
            resolve(fileReader.result);
         };

         fileReader.onerror = (error) => {
            reject(error)
         }
      })
   }

   const handleClick = async(e) => {
      e.preventDefault()

      try {
         const res = await axios.post("http://localhost:3900/api/post/image", { 
            image: img,
            title: title
         })
         //useNavigate("/")
         console.log(res)
      }catch(err) {
         console.log("error", err)
      }
   } 
   const handleDelete = async (id) => {
      try {
         await axios.delete("http://localhost:3900/api/post/deleteimage/"+id)
      } catch (err){
         console.log("cannot delete")
      }
   }

   useEffect(() => {
      const images = async () => {
         try {
            const res = await axios.get("http://localhost:3900/api/post/blob/image/")

            setPics(res.data)
            console.log(res.data)
         } catch (err) {
            console.log("err", err)
         }
      }
      images()
   },[0])


   return (
      <div>
         <div>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
            <input type="file" onChange={(e) => upload(e)} />
            <button onClick={handleClick}>Upload</button>
            <br />
            <img src={img} alt="" height="200px" />
         </div>
         <h1>Uploaded Pictures</h1>
         <br />
         {pics.map((new_table)=>(
         <div key={new_table.id}>
            <h1>{new_table.title}</h1>
            <img src={new_table.image} height="200px" />
            <button onClick={()=>handleDelete(new_table.id)}>Delete</button>
         </div>))}
      </div>
   )
}

export default Img;
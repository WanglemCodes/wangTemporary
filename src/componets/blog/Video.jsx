import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

const Video = () => {

   const [videos, setVideos] = useState(null)
   const [video, setVideo] = useState([])
   const [title, setTitle] = useState()
   const [id, setId] = useState()

   const handleUpload = async (e) => {
      e.preventDefault()
      try {
         const formData = new FormData()
         formData.append('title', title)
         formData.append('file', video)
         const res = await axios.post("http://localhost:3900/api/post/video", formData )
         console.log(video)
         return res.data
      }catch(err) {
         console.log("lol",typeof formData)
         console.log(video)
      }
   }

   useEffect(() => {
      
      const videos = async () => {
      fetch('http://localhost:3900/api/post/blob/videos/')
         .then(response => response.arrayBuffer())
         .then(data => {
            console.log(data)
            const uint8Array = new Uint8Array(data);
            
            const blob = new Blob([uint8Array], {type: 'video/mp4'})
            const uid = uint8Array[uint8Array.length - 1]
            const dec = uid.toString(10)
            console.log(dec)
            const videoURL = URL.createObjectURL(blob);
            setVideos([videoURL])
         })
         .catch(error => console.error('error Fetching', error))
      /*   try {
         const res = await axios.get(`http://localhost:3900/api/post/blob/videos/`)

         
         setVideos(res.data)
         console.log(res.data)
      } catch (err) {
         console.log('error', err)
      }*/
   }
   videos()
   },[0])

   return (
      <div>
         <div>
            <h1>Title</h1>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
            <input type="file" onChange={(e) => {setVideo(e.target.files[0])}} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <img src={video} alt="" width="200px" />
         </div>
         <div>
            <video autoPlay loop poster='' onCanPlay={()=>{console.log("Play Video")}} >
               <source type="video/webm"  />
            </video>
         </div>
         <div>
         {/*videos.map(()=>(
            <div >
               <h1>Saved Videos</h1>
               <video controls width="640" height="360">
              <source src={videos} type="video/mp4" />
            </video>
            </div>
         ))*/
         videos && (
            <video controls width="640" height="360">
              <source src={videos} type="video/mp4" />
            </video>
          )}
          </div>
      </div>
   )
}

export default Video;
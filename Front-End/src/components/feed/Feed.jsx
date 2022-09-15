import "./feed.css"
import React from "react"
import Share from "../share/Share"
import Post from "../post/Post"
import { useEffect,useState } from "react"
import axios from "axios"
export default function Feed() {
   const[posts,setPosts] =useState([])
   const[text,setText] =useState("")
   useEffect(()=>{

      console.log("feedrenderd")
    
  
    
  },[]);

  return (
    <div className="feed">
      <input type="text" onChange={e=>setText(e.target.value)}/>
      <div className="feedWrapper">
      <Share/>

      {/*Posts.map((p)=>(
      <Post key={p.id}post={p}/>
      ))*/}
       
      </div>
    </div>
  )
}

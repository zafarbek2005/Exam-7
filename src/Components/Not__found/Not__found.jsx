import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{textAlign:"center",  marginTop:"5px"}}
    >
        <img  style={{
          maxWidth:"700px",
          width:"100%", 
          height:"auto",
          borderRadius:"15px",
          boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px;",
          marginBottom:"10px",
          padding:"20px",

        }} src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="notfoun.img" /> <br />
        <Link to={"/"}>
        <button 
        style={{width:"40%",
        height:"40px",marginBottom:"50px",
        background:"#000",color:"#fff",
        border:"none",borderRadius:"15px"


        }
        }>
            Back to Home</button>
        
        </Link>
    </div>
  )
}

export default NotFound
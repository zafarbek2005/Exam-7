import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{textAlign:"center",marginTop:"5px"}}>
        <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="notfoun.img" /> <br />
        <Link to={"/"}>
        <button 
        style={{width:"40%",
        height:"40px",marginBottom:"100px",background:"#000",color:"#fff",
        border:"none",borderRadius:"15px"

        }
        }>
            Back to Home</button>
        
        </Link>
    </div>
  )
}

export default NotFound
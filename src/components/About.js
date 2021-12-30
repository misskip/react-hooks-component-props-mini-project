import React from 'react'
import blogData from "../data/blog";

const content = blogData

export default function About(props) {
    return (
        <div>
           <aside className="aside">
               <img src={content.image} alt="blog logo" placeholder= "https://via.placeholder.com/215"></img>
               <p>{content.about}</p>


           </aside>
        </div>
    )
}

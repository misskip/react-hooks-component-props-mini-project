import React from 'react'
import blogData from "../data/blog";

const content = blogData


const Header = (props) => {
    console.log(props);
    
    return (
        <div>
        <header className="header">
           <h1 className="h1">{content.name}</h1> 
        </header>
        </div>
    )
}

export default Header;
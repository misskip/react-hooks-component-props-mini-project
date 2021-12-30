import React from 'react'
import Article from './Article'


const posts =  [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ]

function ArticleList () {
return (

   posts.map(content => {
       const { id, title , date , preview  } = content
       
    return (      
        <div>
        <main className="body">
           <Article id = {1} title =  {content.title} date = {content.date} preview = {content.preview}/>
         
        </main> 
        </div>
   )   
},)
)
} 
export default ArticleList
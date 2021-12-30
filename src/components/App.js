import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);




const App = (props) => {
    console.log(props);

  
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
    </div>
  );
}

export default App;

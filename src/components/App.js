import React from "react";
import About from "./About";
import Header from "./Header";
import ArticleList from "./Articlelist";
import blogData from "../data/blog";

console.log(blogData);
function App() {

  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About imageSrc={blogData.image} aboutText={blogData.about} />
      <ArticleList posts={blogData.posts} />  
    </div>
  );
}

export default App;

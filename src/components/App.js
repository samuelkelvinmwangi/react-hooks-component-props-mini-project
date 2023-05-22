import React from "react";
import blogData from "../data/blog";

console.log(blogData);
//prop function ;
function Header(props) {
  const { blogName } = props;

  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
}

function About(props) {
  const { imageSrc, aboutText } = props;
  const placeholderImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageSrc || placeholderImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}


function Article(props) {
  const { title, date, preview } = props;
  const defaultDate = "December 15, 2020";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

function ArticleList(props) {
  const { posts } = props;

  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}


//displaying in app;
function App() {

  const blogName = "Overreacted";
  const imageSrc = "";
  const aboutText = "Personal Blog By Samuel Mwangi";

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About imageSrc={imageSrc} aboutText={aboutText} />
      <ArticleList posts={posts} />
      
    </div>
  );
}

export default App;

import React from "react";

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
 
export default Article;
import React from "react";

function About(props) {
    const { imageSrc, aboutText } = props;
    const placeholderImage = "https://via.placeholder.com/215";
    console.log(props);
  
    return (
      <aside>
        <img src={imageSrc || placeholderImage} alt="blog logo" />
        <p>{aboutText}</p>
      </aside>
    );
  }
  
  export default About;
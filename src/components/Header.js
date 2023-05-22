import React from "react";

function Header(props) {
    const { blogName } = props;
    console.log(props);
  
    return (
      <header>
        <h1>{blogName}</h1>
      </header>
    );
  }

  export default Header;
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkNames = links.map((link) => {
    
      return  <a key={link} href={`#${link}`}>{link}</a>
     
  })

  return <nav>{linkNames}</nav>;
}

export default NavBar;


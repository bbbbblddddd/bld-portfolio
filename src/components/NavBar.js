import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <nav>
    <ul id= "navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-me">About Me</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
    </nav>
  );
}

export default NavBar;
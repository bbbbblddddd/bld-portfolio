import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">HomePage</Link>
      </li>
      <li>
        <Link to="/about-me">About Me</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      
    </ul>
  );
}

export default NavBar;
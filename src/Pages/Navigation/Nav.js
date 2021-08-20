import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navLinks">
      <Link className="navStyle" to="/">
        <h3>My REACT Projects</h3>
      </Link>

      <ul className="nav-links">
        <Link className="navStyle" to="/todo">
          <li>ToDo</li>
        </Link>
        <Link className="navStyle" to="/weather">
          <li>Weather</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

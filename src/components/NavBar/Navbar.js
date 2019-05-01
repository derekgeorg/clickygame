import React from "react";
import "./style.css";

const Navbar = (props) => (
    <nav className="navbar navbar-dark bg-primary">
            <ul>
              <li>
                Clicky Game
          </li>
              <li>
                
              </li>
              <li>
                Score: <span id="yourScore">{props.score}</span> 
              </li>
            </ul>
          </nav>
);

export default Navbar;
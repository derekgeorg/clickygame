import React from "react";
import "./style.css";

const Navbar = (props) => (
    <nav className="navbar navbar-dark bg-primary">
            <ul>
              <li>
                Clicky Game
          </li>
              <li>
                You guessed <span id="guessValue"></span>
              </li>
              <li>
                Score: <span id="yourScore"></span> | Top Score: <span id="topScore"></span>
              </li>
            </ul>
          </nav>
);

export default Navbar;
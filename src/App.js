import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <ul>
          <li>
            Clicky Game
          </li>
          <li class>
            You guessed <span id="guessValue">Value</span>
          </li>
          <li>
            Score: <span id="yourScore">0</span> | Top Score: <span id="topScore">0</span>
          </li>
        </ul>
      </nav>
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
      <main className="container">
      <div className="imgDiv"><img class="img" src="/assets/img/react.png" alt="react js logo"></img></div>
      <div className="imgDiv"><img class="img" src="/assets/img/atom.png" alt="atom logo"></img></div>
      <div className="imgDiv"><img class="img" src="/assets/img/mongo.png" alt="monog logo"></img></div>
      <div className="imgDiv"><img class="img" src="/assets/img/nodejs-512.png" alt="nodejs logo"></img></div>
      {/* <div className="imgDiv"><img class="img" src="/assets/img/sketch.png"></img></div> */}
      </main>
      <footer className="footer">
        <div className="bottom">
        Clicky Game! <img class="footerImg" alt="react" src="assets/img/react.png"></img>
                </div>
      </footer>
    </div>
  );
}

export default App;

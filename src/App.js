import React, { Component } from 'react';
import './App.css';
import logos from "./logos.json";
import LogoCard from "./components/LogoCard"
import Wrapper from "./components/Wrapper"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/NavBar"
// import Footer from "./components/Footer"


class App extends Component {
  state = {
    logos,
    yourScore: 0,
    topScore: 0,
    guessValue: "",
  };

  //Whenever we write a function in ES6, we use the format:
  // functionName = (paramter or if we don't have a paramter, keep it blank) => { do stuff here}
  //greatestFunctionEver = () => {this.setState(...)}
  // scoring function
  clicked = (id) => {
    console.log(id)
    console.log(this.state.logos[id].clicked)
    if (this.state.logos[id].clicked === false) {
      let preShuffledArray = [...this.state.logos]
      preShuffledArray[id].clicked = true;
      const shuffled = this.shuffleCards(preShuffledArray);
      let newScore = this.state.yourScore + 1;
      this.setState({ yourScore: newScore, logos: shuffled });
    } else {
      console.log("Lose")
    }

  }

  // check we haven't chosen img id
  // if/else has been chose endgame or add to score

  // end of game reset function
  // (shuffle)
  shuffleCards = array => {
    for (let i = 0; i < array.length; i++) {
      const random = Math.floor(Math.random() * array.length);
      let temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
    return array;
  }

  render() {
    return (

      <Wrapper>
        <Navbar score={this.state.yourScore}></Navbar>
        <Jumbotron></Jumbotron>
        {
          this.state.logos.map((logo, index) => (
            <LogoCard
              id={index}
              key={index}
              name={logo.name}
              image={logo.image}
              handleClick={this.clicked}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;

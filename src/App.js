import React, { Component } from 'react';
import './App.css';
import logos from "./logos.json";
import LogoCard from "./components/LogoCard"
import Wrapper from "./components/Wrapper"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"


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
    const shuffled = this.shuffleCards(this.state.logos);
    this.setState({ score: this.state.yourScore + 2, logos: shuffled});
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
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        {
          this.state.logos.map(logo => (
            <LogoCard
              id={logo.id}
              key={logo.id}
              name={logo.name}
              image={logo.image}
              handleClick={this.clicked}
            />
          ))}

        <Footer></Footer>,
        </Wrapper>


    );
  }
}


export default App;

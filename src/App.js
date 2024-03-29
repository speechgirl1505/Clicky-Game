import React, { Component } from "react";
import Peeps from "./components/Peeps";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./peeps.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    winLose: ""
  };

 getHigherScore = async id => {
    const peeps = this.state.friends.filter(friend => friend.id === id);
    if (peeps[0].clicked === false) {
      peeps[0].clicked = true;
      await this.setState({score: this.state.score + 1})
      console.log("super test")
      if (this.state.score === 9) {
        // alert("You win!")
         setTimeout(this.doOver,2000)
        this.setState({winLose: "Congrats, I don't know how but you won!"})
      }
    } else {
      // alert("Suck it loser")
       setTimeout(this.doOver,2000)
      this.setState({winLose: "Suck it Loser!"})
    }
    this.randomFriends(this.state.friends)
    
  };

  componentDidMount(){
    this.randomFriends(this.state.friends)
  };

  randomFriends(array) {
      var m = array.length, t, i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }

    doOver = async () => {
      await this.setState({score: 0})
      window.location.reload()
    }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>
        <div className="header">
          <h1>Clicky Game</h1>
          <h3>Try to get to 9 by clicking a tile just know if you hit the same one twice you lose!</h3>
          <h5>GIF is reflective of creator of this app while doing this assignment</h5>
          <hr/>
        
        <h4>Score: {this.state.score} | Goal: 9</h4>
        <p>{this.state.winLose}</p>
        </div>
        </Title>
        {this.state.friends.map(friend => (
          <Peeps
          getHigherScore={this.getHigherScore}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            doTheShuffle={this.doTheShuffle}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
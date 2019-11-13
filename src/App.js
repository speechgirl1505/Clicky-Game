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
    clickedFriends: []
    //-every time someone clicked save to array and with on click filter if id was clicked = something is in array you lose otherwise add one to score
    //push to add to array not reassign value
    //filter first to see if clicked is already in clicked friends
     //   this.setState({ clicked: this.state.clicked.id });
  };
// clickedAlready = id => {
//   if (this.state.clickedFriends)
// }
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const newfriends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
 // this.setState({newFriends: friends})
  // };

 getHigherScore = id => {
    // const peeps = this.state.friends.filter(friend => friend.id == id);
    const newScore = this.state.score + 1;
    this.setState({ score: newScore});
    if (newScore === 12) {
      alert("You won")
      this.setState({
        score: 0
      })
    }
    console.log(this.state.score)
    console.log("who is this" + id)
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

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game
        <div className="header">
        <h2>Score: {this.state.score} | Goal: 12</h2>
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
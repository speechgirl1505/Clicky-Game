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
    score: 0
    // shuffledFriends
    //math.random rearrange friends into an array 
    //clickedFriends -every time someone clicked save to array and with on click filter if id was clicked = something in array you lose otherwise add one to score
    //push to add to array not reassign value
    //filfter first to see if clicked is already in clicked friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

 getHigherScore = id => {
    // We always use the setState method to update a component's state
    // const peeps = this.state.friends.filter(friend => friend.id !== id);

    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score)
    console.log("who is this" + id)
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <Peeps
          getHigherScore={this.getHigherScore}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
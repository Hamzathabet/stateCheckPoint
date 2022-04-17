import React, { Component } from "react";
import Profile from "./Component/Profile/Profile";

export class App extends Component {
  state = {
    showProfile: false,
    counter: 0,
    fullname: "Hamza Ben Thabet",
    bio: "developpeur Senior fullStack",
    profession: "Consultant stack js",
  };
  handleShow = () => {
    this.setState({ showProfile: !this.state.showProfile });
    if (this.state.showProfile) {
      this.setState({ counter: this.state.counter + 1 });
    }

    console.log(this.state.showProfile);
    console.log(this.state.counter);
  };
  render() {
    return (
      <div className="Profile">
        {this.state.showProfile && (
          <Profile 
          fullname={this.state.fullname} 
          bio={this.state.bio}
          profession={this.state.profession}
          counter={this.state.counter}
          />
        )}
        <button onClick={this.handleShow}>{this.state.showProfile ?"Close Profile":"Open Profile" }</button>
      </div>
    );
  }
}

export default App;

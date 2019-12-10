import React, { Component } from "react";
import Header from "./Header";
import Images from "./Images";

class MainPage extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: false,
  };

  scoreIncrease = () => {
    if (this.state.clicked === false) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ clicked: true });
    }
  };

  imgRandom (res) {
    var imgArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var i;
    for (i=0; i<imgArray.length;i++) {
      res = i = Math.floor(Math.random() * 16)
    }
  }

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Images />
      </div>
    );
  };

}
export default MainPage;


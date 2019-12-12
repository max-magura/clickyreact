import React, { Component } from "react";
import Header from "./Header";
import Images from "./Images";

class MainPage extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: false,
  };

  scoreIncrease = (img) => {
    const key = img.target.value;
    const value = img.target.value;

    console.log("BUTT")
    if (this.state.clicked === false) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
      this.setState({ clicked: true });
      this.setState({ [key]: value });
    }
    else {
      this.setState({ score: 0 });
      this.setState({ topScore: this.state.topScore});
    }
  };

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Images
        onClick={this.scoreIncrease}
        >
        </Images>
      </div>
    );
  };

}
export default MainPage;


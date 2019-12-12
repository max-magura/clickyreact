import React, { Component } from "react";
import Header from "./Header";
import Images from "./Images";
import images from './images.json';

class MainPage extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: false,
  };

  scoreIncrease = (img) => {
    // const name = img.target.name;
    // const value = img.target.value;

    console.log("BUTT")
    if (this.state.clicked === false) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
      this.setState({ clicked: true });
      // this.setState({ [name]: value });
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
        {images.map(item => (
          <div>
            <Images
              name={item.image}
              id={item.id}
              onClick={this.scoreIncrease}
              key={item.id} />
          </div>
        ))}
      </div>
    );
  };

}
export default MainPage;


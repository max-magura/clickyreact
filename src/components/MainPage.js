import React, { Component } from "react";
import Header from "./Header";
import Images from "./Images";
import images from './images.json';
import "./style.css";

class MainPage extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: false,
  };

  scoreIncrease = () => {
    this.setState({ score: this.state.score + 1 });
    this.setState({ topScore: this.state.topScore + 1 });
    this.setState(state => ({ clicked: !state.clicked}))
  };

  resetScore = () => {
    this.setState(
      {
        score: 0,
        topScore: this.state.topScore
      })
  };

  imageClick = (Images) => {
    this.state.clicked ? this.resetScore() : this.scoreIncrease()
  };




  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {images.map(item => (
          <div class="image-container">
            <Images
              name={item.image}
              id={item.id}
              onClick={this.imageClick}
              key={item.id}
              clicked = {item.clicked}
            />
          </div>
        ))}
      </div>
    );
  };

}
export default MainPage;


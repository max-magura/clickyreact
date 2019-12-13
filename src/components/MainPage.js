import React, { Component } from "react";
import Header from "./Header";
// import Images from "./Images";
import images from './images.json';
import "./style.css";

class MainPage extends Component {
  state = {
    score: 0,
    // topScore: 0,
    images: images
  };

  componentDidMount(){
    // this.setState({ images: images})
    console.log(images)
    console.log(this.state.images)
  }

  scoreIncrease = () => {
    this.setState({ score: this.state.score + 1 });
    // this.setState({ topScore: this.state.topScore + 1 });
  };

  resetScore = () => {
    let itemsArray = this.state.images
    itemsArray.forEach(element => {
    
        element.clicked = false;
        element.clickcounter = 0
    }); 
    this.setState(
      {
        score: 0,
        // topScore: this.state.topScore,
    
      })
  };

  imageClick = (keyTarget) => {
    let itemsArray = this.state.images
    console.log(this.state.images)
    itemsArray.forEach(element => {
      if (element.id === keyTarget){
        element.clicked = true;
        element.clickcounter++
      }
    });
    this.setState({images:itemsArray})
    itemsArray = itemsArray.filter(x => x.clickcounter > 1)
    console.log(itemsArray)

    itemsArray.length ? this.resetScore() : this.scoreIncrease()
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
            {/* <Images
              name={item.image}
              id={item.id}
              onClick={this.imageClick}
              key={item.id}
              clicked = {this.state.clicked}
            /> */}
            <span>
            <img onClick={() => this.imageClick(item.id)} src={ require("../img/" + item.image)} value={item.name} alt={item.name}></img>
            </span>
            </div>
          ))}
      </div>
    );
  };

}
export default MainPage;


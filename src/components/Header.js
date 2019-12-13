import React from "react";

function Header(props) {
  return (
    <div>
      <h1>Clicky Game</h1>
      <h2>Click any image to begin. Earn a point for each image click, but don't click the same image twice! The game will restart if you do.</h2>
      <h3>Score: {props.score} </h3>
      {/* <h3>Top Score: {props.topScore} </h3> */}
    </div>
  );
}

export default Header;

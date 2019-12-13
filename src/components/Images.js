import React from "react";
import "./style.css";

function Images(props) {
  console.log(props.clicked)
  console.log(props.id)
  return (
    <div>
      <img onClick={() => this.props.onClick(this.props.id)} src={ require("../img/" + props.name)} value={props.name} alt={props.name}></img>
    </div>

  );
}

export default Images;



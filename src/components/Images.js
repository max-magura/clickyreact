import React from "react";
import "./style.css";

function Images(props) {
  return (
    <div>
      <img onClick={props.onClick} src={ require("../img/" + props.name)} value={props.key} alt={props.name}></img>
    </div>

  );
}

export default Images;



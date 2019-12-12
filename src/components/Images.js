import React from "react";
import "./style.css";


function Images(props) {
  var imgArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  var i;
  for (i=0; i<imgArray.length;i++) {
   i = imgArray[Math.floor(Math.random()*imgArray.length)];
  }
  return (
  <div>
    <img onClick={props.onClick} src={ require('../img/dog1.jpeg')} value="1"></img>
    <img onClick={props.onClick} src={ require('../img/dog2.jpeg')} value="2"></img>
  </div>
  );
}


export default Images;

// var ImageArray = [
//   1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
// ]

// export default ImageArray



// for (i=0; i<imgArray.length; i++){
//   <img src={ require('../img/' + imgArray[Math.floor(Math.random()*imgArray.length)]) } />
//   }
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
    <img src={ require('../img/dog'+ i +'.jpeg') } />
    <img src={ require('../img/dog'+ i +'.jpeg') } />
  </div>
  );
}


export default Images;


// for (i=0; i<imgArray.length; i++){
//   <img src={ require('../img/' + imgArray[Math.floor(Math.random()*imgArray.length)]) } />
//   }
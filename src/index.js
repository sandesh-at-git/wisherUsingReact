import React from "react";
import ReactDOM from "react-dom";
const root = document.getElementById("root");

let greet;
let time = new Date();
let currentTime = time.getHours();
// let currentTime = 20;
// Time calculating code
const greetColor = {
  color: "red"
};

if (currentTime < 12) {
  greet = "Good Morning";
  greetColor.color = "red";
} else if (currentTime < 18) {
  // console.log("Good Afternoon");
  greetColor.color = "green";
  greet = "Good Afternoon";
} else {
  greet = "Good Evening";
  greetColor.color = "yellow";
}

ReactDOM.render(
  <div>
    <h1 style={greetColor} className="heading">
      {greet}
    </h1>
  </div>,
  root
);

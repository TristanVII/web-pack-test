import "./style.css";
import Icon from "./test.png";
import _ from "lodash";
import Data from "./data.csv";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");

  // imported
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  const myIcon = new Image();
  myIcon.src = Icon;

  // button
  button.innerHTML = 'Click me'
  button.onclick = printMe;

  // Add icon to div
  element.appendChild(myIcon);
  element.appendChild(button)
  const data = Data;
  const ele2 = document.createElement('div');
  ele2.innerHTML = `WEBPACK loading data: \n${data}`; // You might need to process 'data' depending on how webpack handles CSV imports
  element.appendChild(ele2);

  return element;
}

document.body.appendChild(component());

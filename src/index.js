import "./style.css";
import Icon from "./test.png";
import _ from "lodash";
import Data from "./data.csv";

function component() {
  const element = document.createElement("div");

  // imported
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  const myIcon = new Image();
  myIcon.src = Icon;

  // Add icon to div
  element.appendChild(myIcon);
  const data = Data;
  const ele2 = document.createElement('div');
  ele2.innerHTML = `WEBPACK loading data: \n${data}`; // You might need to process 'data' depending on how webpack handles CSV imports
  element.appendChild(ele2);

  return element;
}

document.body.appendChild(component());

import './style.css'
import Icon from './test.png'
import _ from 'lodash'
function component() {
  const element = document.createElement('div');

  // imported
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')
  const myIcon = new Image()
  myIcon.src = Icon;

  // Add icon to div
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

'use strict'

import 'babel-polyfill';
import world from './world';
require("../styles/main.css");

document.getElementById('output').innerHTML = `Hello ${world}!`;

var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];

function getSupportedPropertyName(properties) {
  for (var i = 0; i < properties.length; i++) {
    if (typeof document.body.style[properties[i]] != "undefined") {
      return properties[i];
    }
  }
  return null;
}

var team_1_item = document.getElementById('team-1');
var team_2_item = document.getElementById('team-2');
var team_3_item = document.getElementById('team-3');
var team_4_item = document.getElementById('team-4');
var transformProperty = getSupportedPropertyName(transform);
let valueX = 0;
let valueY = 0;

function addRandomNumTo(x) {
  let random = Math.ceil(Math.random() * 5); // return a random number between 1 and 10
  return x + random;
}

let teams = ['team-1', 'team-2', 'team-3', 'team-4'];
let teamItems = [
  team_1_item,
  team_2_item,
  team_3_item,
  team_4_item
];


function upPoints() {
  valueY = addRandomNumTo(valueY);
  let teamItemSelector = Math.floor(Math.random() * 4); // 0-3
  let x = valueX + 'px';
  let y = valueY + 'px';
  if (transformProperty) {
    teamItems[teamItemSelector].style[transformProperty] = `translate3d(${x}, ${y}, 0)`;
  }
}

var timer = setInterval(upPoints, 200);

setTimeout(()=> {clearInterval(timer)}, 20000);
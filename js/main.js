'use strict'

//imports
var scoreGen = require('./scoreGen');


var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
var team_1_item = document.getElementById('team-1');
var team_2_item = document.getElementById('team-2');
var team_3_item = document.getElementById('team-3');
var team_4_item = document.getElementById('team-4');
var transformProperty = getSupportedPropertyName(transform);
var valueX = 0;
var valueY = 80;
var teams = ['team-1', 'team-2', 'team-3', 'team-4'];
var teamItems = [
  team_1_item,
  team_2_item,
  team_3_item,
  team_4_item
];
var scores = [];

scores = scoreGen(scores);
console.log("scores = " + scores);

function getSupportedPropertyName(properties) {
  for (var i = 0; i < properties.length; i++) {
    if (typeof document.body.style[properties[i]] != "undefined") {
      return properties[i];
    }
  }
  return null;
}


function addRandomNumTo(x) {
  var random = Math.ceil(Math.random() * 5); // return a random number between 1 and 10
  return x - random;
}


function upPoints() {
  valueY = addRandomNumTo(valueY);
  var teamItemSelector = Math.floor(Math.random() * 4); // 0-3
  var x = valueX + '%';
  var y = valueY + '%';
  if (transformProperty) {
    teamItems[teamItemSelector].style[transformProperty] = `translate3d(${x}, ${y}, 0)`;
  }
}

var timer = setInterval(upPoints, 200);

setTimeout(function() {clearInterval(timer)}, 5000);
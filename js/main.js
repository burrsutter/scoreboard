'use strict';

//imports
var scoreGen = require('./scoreGen');
var convertScores = require('./convertScores');
var addRandomNumTo = require('./addRandomNumTo');


var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
var team_1_item = document.getElementById('team-1');
var team_2_item = document.getElementById('team-2');
var team_3_item = document.getElementById('team-3');
var team_4_item = document.getElementById('team-4');
var transformProperty = getSupportedPropertyName(transform);
var teams = ['team-1', 'team-2', 'team-3', 'team-4'];
var teamItems = [
  team_1_item,
  team_2_item,
  team_3_item,
  team_4_item
];
var scores = [1,1,1,1];
var displayScores = [1,1,1,1];

function getSupportedPropertyName(properties) {
  for (var i = 0; i < properties.length; i++) {
    if (typeof document.body.style[properties[i]] != "undefined") {
      return properties[i];
    }
  }
  return null;
}

function getScore() {
  scores = scoreGen(scores);
  displayScores = convertScores(scores);
}

function upPoints() {
  getScore();
  for (var i=0; i < displayScores.length; i++) {
    var y = displayScores[i] + 30 + '%';
    if (transformProperty) {
      teamItems[i].style[transformProperty] = `translate3d(0, ${y}, 0)`;
    }
  }
  //console.log("scores = " + displayScores);
}

var timer = setInterval(upPoints, 100);

setTimeout(function() {clearInterval(timer)}, 30000);
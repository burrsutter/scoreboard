'use strict';

//imports
var getScores = require('./getScores');

var scores = [1,1,1,1];
var racerPositions = [1,1,1,1];

function run() {
  scores = getScores(scores, racerPositions);
}

run();

// Start the app by repeatedly fetching and processing the Scores.
// var timer = setInterval(run, 500);

// TODO: turn this off when running with live data
// setTimeout(function() {clearInterval(timer)}, 30000);

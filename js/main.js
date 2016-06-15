'use strict';

//imports
var getScores = require('./getScores');

var scores = [1,1,1,1];
var pops = [1,1,1,1];
var players = [1,1,1,1];
var racerPositions = [1,1,1,1];
var results = {scores, pops, players};

function run() {
  results = getScores(results, racerPositions);
}

run();

/*
// Start the app by repeatedly fetching and processing the Scores.
var timer = setInterval(run, 500);

// TODO: turn this off when running with live data
setTimeout(function() {clearInterval(timer)}, 30000);
*/

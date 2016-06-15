'use strict';

// Called by getScores.js
module.exports = function (results, racerPositions) {
  var convertScores = require('./convertScores');
  var applyScoresToUI = require('./applyScoresToUI');

  // Convert the raw scores into the UI position information needed.
  racerPositions = convertScores(results.scores);
  
  applyScoresToUI(results, racerPositions);
};
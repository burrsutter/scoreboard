'use strict';

// Called by getScores.js
module.exports = function (scores, racerPositions) {
  var convertScores = require('./convertScores');
  var applyScoresToUI = require('./applyScoresToUI');

  // Convert the raw scores into the UI position information needed.
  racerPositions = convertScores(scores);
  
  applyScoresToUI(scores, racerPositions);
};
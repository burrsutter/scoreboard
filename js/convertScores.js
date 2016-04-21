'use strict';

module.exports = function (values) {
  var scores = [];
  var scorePercentages = [];
  var total = 0;
  var score = 0;
  var i = 0;
  var j = 0;
  var h = 0;
  var screenMaxPercentSize = 75;

  // Total up all the scores
  for (i; i < values.length; i++) {
    total += values[i];
  }

  // Find the percentage for each score
  for (j; j < values.length; j++) {
    scorePercentages[j] = values[j] / total;
  }
  
  // Fit the scores into the screen size 
  for (h; h < scorePercentages.length; h++) {
    scores[h] = Math.floor(scorePercentages[h] * screenMaxPercentSize);
  }
  
  return scores;
};
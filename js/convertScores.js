'use strict';

// Called by processScores.js, getPosition.js
module.exports = function (values) {
  var insertionSort = require('./insertionSort');

  var total = 0;
  var screenMaxPercentSize = 75;
  var scorePercentages = [];
  var sortedScorePercentages;
  var highestScorePercentage;

  var invertedPercentagesScores = [];
  var sortedInvertedPercentagesScores;
  var highestInvertedPercentagesScore;
  var baseOffset = 0;
  var scoreMultiplier;

  var scoreSpread = [];
  var i;


  // Total up all the scores
  for (i=0; i < values.length; i++) {
    total += values[i];
  }

  // Find the percentage for each score
  for (i=0; i < values.length; i++) {
    scorePercentages[i] = (values[i] / total) * 100;
  }

  // Clone the array
  sortedScorePercentages = scorePercentages.slice(0);

  // sort the array
  insertionSort(sortedScorePercentages, 0, sortedScorePercentages.length - 1);

  // Invert the percentages for the scores since 0 is highest in the UI
  // Find the highest number
  highestScorePercentage = sortedScorePercentages[sortedScorePercentages.length - 1];

  // Subtract all the numbers from the highest (highest - n)
  for(i=0; i < scorePercentages.length; i++) {
    invertedPercentagesScores[i] = highestScorePercentage - scorePercentages[i];
  }

  // Spread all scores across screen-size(75)
  // clone the array
  sortedInvertedPercentagesScores = invertedPercentagesScores.slice(0);
  // sort the array
  insertionSort(sortedInvertedPercentagesScores, 0, sortedInvertedPercentagesScores.length - 1);
  // Find the highest (this will be the lowest score but highest value) from new array
  highestInvertedPercentagesScore = sortedInvertedPercentagesScores[sortedInvertedPercentagesScores.length - 1];

  // Add base-offset(5) to lowest to get spread-multiplier
  scoreMultiplier = screenMaxPercentSize/ (highestInvertedPercentagesScore + baseOffset);

  // Multiply each value in inverted array by spread-multiplier
  for(i=0; i < invertedPercentagesScores.length; i++) {
    scoreSpread[i] = scoreMultiplier * invertedPercentagesScores[i];
  }

  return scoreSpread;
};
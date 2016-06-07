'use strict';

// Called by applyScoresToUI.js
module.exports = function (racerPosition, scores) {
  var insertionSort = require('./insertionSort');
  var sortedScores = [];
  var rankIndex;

  // Copy the array so that we aren't modifying the original.
  sortedScores = scores.slice(0);
  // Sort the scores in ascending order.
//  sortedScores.sort(function(a, b){return a-b}); //standard JS way to sort
  insertionSort(sortedScores, 0, sortedScores.length - 1); //my way, just because I can
  // Now that we know the ascending order of the scores,
  // get the index of the first element in the array that has a value of scores[i] or more.
  // The findIndex function passes each element of the array one at a time. 
  // It stops looking after it finds a match.
  rankIndex = sortedScores.findIndex(function(sortedScore){return sortedScore>=scores[racerPosition]});

  return rankIndex;
};
'use strict';

module.exports = function (oldScores) {
  var addRandomNumTo = require('./addRandomNumTo');
  var scores = new Array(oldScores.length);
  var i = 0;

  // Take a set of scores and add a random number to each
/*
  for (i; i < oldScores.length; i++) {
    scores[i] = addRandomNumTo(oldScores[i],10);
  }
*/

  scores[0] = addRandomNumTo(oldScores[0], 10);
  scores[1] = addRandomNumTo(oldScores[1], 1);
  scores[2] = addRandomNumTo(oldScores[2], 5);
  scores[3] = addRandomNumTo(oldScores[3], 7);


  return scores;
};
'use strict';

module.exports = function (oldScores) {
  var addRandomNumTo = require('./addRandomNumTo');
  var scores = new Array(oldScores.length);
  var randomIndex;

  // Take a set of scores and add a random number to each
/*
  var i = 0;
  for (i; i < oldScores.length; i++) {
    scores[i] = addRandomNumTo(oldScores[i],10);
  }
*/

  scores[0] = addRandomNumTo(oldScores[0], 2);
  scores[1] = addRandomNumTo(oldScores[1], 11);
  scores[2] = addRandomNumTo(oldScores[2], 4);
  scores[3] = addRandomNumTo(oldScores[3], 7);

  randomIndex = Math.floor(Math.random() * 4);
  scores[randomIndex] = addRandomNumTo(scores[randomIndex], 30)
  
  return scores;
};
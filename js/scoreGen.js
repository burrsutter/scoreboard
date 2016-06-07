'use strict';

// Called by getScores.js
module.exports = function (oldScores) {
  var addRandomNumTo = require('./addRandomNumTo');
  var newScores = new Array(oldScores.length);
  var randomIndex;

  newScores[0] = addRandomNumTo(oldScores[0], 2);
  newScores[1] = addRandomNumTo(oldScores[1], 11);
  newScores[2] = addRandomNumTo(oldScores[2], 4);
  newScores[3] = addRandomNumTo(oldScores[3], 7);

  randomIndex = Math.floor(Math.random() * 4);
  newScores[randomIndex] = addRandomNumTo(newScores[randomIndex], 30);
  
  return newScores;
};
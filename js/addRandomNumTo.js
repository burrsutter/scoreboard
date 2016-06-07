'use strict';

// Called by scoreGen.js
module.exports = function (x, multiplier) {
  var random = Math.ceil(Math.random() * multiplier); // return a random number between 1 and 10
  return x + random;
};
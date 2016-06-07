'use strict';

// Called by main.js
// module.exports = function (scores, racerPositions) {
// TODO: remove when live
module.exports = function (scores, racerPositions) {
  // TODO: remove when live
  var scoreGen = require('./scoreGen');
  var processScores = require('./processScores');
  // var scores = new Array(scores.length);

  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState == 4) {
  //     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  //       console.log("xhr succeeded: " + xhr.status + ' results: ' + xhr.responseText);
        scores = scoreGen(scores);
        
        // TODO: move to within xhr
        processScores(scores, racerPositions);
        
        return scores;
  //     } else {
  //       console.log("xhr failed: " + xhr.status);
  //     }
  //   }
  // };
  // xhr.open('get', restURL, true);
  // xhr.send(null);

};
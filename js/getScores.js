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
        // scores = scoreGen(scores);
        // console.log("HERE");
        var scores = new Array(4);
        scores[0] = 1;
        scores[1] = 1;
        scores[2] = 1;
        scores[3] = 1;
        
        // declare websocket
        var ws = new WebSocket('ws://localhost:9001/scoreboard');
        
        ws.onopen = event => {
          // console.log(event);
        };

        ws.onmessage = event => {
          console.log(event);
          let message = JSON.parse(event.data);
          
          scores[0] = message[0].score;          
          scores[1] = message[1].score;
          scores[2] = message[2].score;
          scores[3] = message[3].score;
          
          processScores(scores, racerPositions);
        };
        
        return scores;
  //     } else {
  //       console.log("xhr failed: " + xhr.status);
  //     }
  //   }
  // };
  // xhr.open('get', restURL, true);
  // xhr.send(null);

};
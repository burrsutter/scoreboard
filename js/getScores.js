'use strict';

// Called by main.js
module.exports = function (results, racerPositions) {
  var processScores = require('./processScores');
  // TODO: remove when live
/*
  var scoreGen = require('./scoreGen');
  results.scores = scoreGen(results.scores);
  var pp = 0, pl = 0;
  for (var i = 0; i < 4; i++) {
    pp = pp + (1 + i) * 5;
    pl = pl + (1 + i) * 2;
    results.pops[i] = pp;
    results.players[i] = pl;
  }
  processScores(results, racerPositions);
*/

/*
  var scores = new Array(4);
  scores[0] = 1;
  scores[1] = 1;
  scores[2] = 1;
  scores[3] = 1;
*/

  // declare websocket
  var ws = new WebSocket('ws://localhost:9001/scoreboard');

  ws.onopen = event => {
    // console.log(event);
  };

  ws.onmessage = event => {
    console.log(event);
    let message = JSON.parse(event.data);

    for (var i = 0; i < message.length; i++) {
      results.scores[i] = message[i].score;
      results.pops[i] = message[i].numPops;
      results.players[i] = message[i].numPlayers;
    }

    processScores(results, racerPositions);
  };

  return results;

};

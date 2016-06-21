'use strict';

// Called by processScores.js
module.exports = function (results, racerPositions) {
  var getSupportedPropertyName = require('./getSupportedPropertyName');
  var getPosition = require('./getPosition');

  var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
  var transformProperty = getSupportedPropertyName(transform);

  var team_1_item = document.getElementById('team-1');
  var team_2_item = document.getElementById('team-2');
  var team_3_item = document.getElementById('team-3');
  var team_4_item = document.getElementById('team-4');
  var teamItems = [
    team_1_item,
    team_2_item,
    team_3_item,
    team_4_item
  ];
  var team_score_1 = document.getElementById('team-score-1');
  var team_score_2 = document.getElementById('team-score-2');
  var team_score_3 = document.getElementById('team-score-3');
  var team_score_4 = document.getElementById('team-score-4');
  var teamScores = [
    team_score_1,
    team_score_2,
    team_score_3,
    team_score_4
  ];
  var team_score_block_1 = document.getElementById('team-score-block-1');
  var team_score_block_2 = document.getElementById('team-score-block-2');
  var team_score_block_3 = document.getElementById('team-score-block-3');
  var team_score_block_4 = document.getElementById('team-score-block-4');
  var teamScoreBlocks = [
    team_score_block_1,
    team_score_block_2,
    team_score_block_3,
    team_score_block_4
  ];
  var rank_team_1 = document.getElementById('rank-team-1');
  var rank_team_2 = document.getElementById('rank-team-2');
  var rank_team_3 = document.getElementById('rank-team-3');
  var rank_team_4 = document.getElementById('rank-team-4');
  var teamRanks = [
    rank_team_1,
    rank_team_2,
    rank_team_3,
    rank_team_4
  ];
  var ranks = [
    '4<span>th</span>',
    '3<span>rd</span>',
    '2<span>nd</span>',
    '1<span>st</span>'
  ];

  var totalScoreDiv = document.getElementById('totalScore');

  for (var i=0; i < racerPositions.length; i++) {
    // Set the position vertically of the 'car'
    var y = racerPositions[i] + '%';
    if (transformProperty) {
      teamItems[i].style[transformProperty] = 'translate3d(0, ' + y + ', 0)';
    }
    // Add Total pops and players to the header.
    totalScoreDiv.innerHTML = `
      <li>
        <strong>Total pops: </strong>${results.pops.reduce( (prev, curr) => prev + curr )}
      </li>
      <li>
        <strong>Total players: </strong>${results.players.reduce( (prev, curr) => prev + curr )}
      </li>
    `;
    // Add the score to the header. Add pops and players to team score card
    teamScoreBlocks[i].innerHTML = `
      <strong id="team-score-${i}">${results.scores[i]}</strong>
      <ul>
        <li>
          <strong>Pops: </strong>${results.pops[i]}
        </li>
        <li>
          <strong>Players: </strong>${results.players[i]}
        </li>
      </ul>
    `;
    // Find the position / rank for each team.
    var rankindex = getPosition(i, results.scores);
    // Based on the rank add the 'place' (1st,2nd,3rd,4th) to each 'car'.
    teamRanks[i].innerHTML = ranks[rankindex];
    // Add 'glow' to the current leader and remove it from the others.
    if (rankindex === 3) {
      teamItems[i].classList.add('winner');
      teamScoreBlocks[i].classList.add('winner');
    } else {
      teamItems[i].classList.remove('winner');
      teamScoreBlocks[i].classList.remove('winner');
    }
  }
};

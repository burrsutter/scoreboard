'use strict';

//imports
var scoreGen = require('./scoreGen');
var convertScores = require('./convertScores');
var addRandomNumTo = require('./addRandomNumTo');
var insertionSort = require('./insertionSort');


var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
var team_1_item = document.getElementById('team-1');
var team_2_item = document.getElementById('team-2');
var team_3_item = document.getElementById('team-3');
var team_4_item = document.getElementById('team-4');
var team_score_1 = document.getElementById('team-score-1');
var team_score_2 = document.getElementById('team-score-2');
var team_score_3 = document.getElementById('team-score-3');
var team_score_4 = document.getElementById('team-score-4');
var rank_team_1 = document.getElementById('rank-team-1');
var rank_team_2 = document.getElementById('rank-team-2');
var rank_team_3 = document.getElementById('rank-team-3');
var rank_team_4 = document.getElementById('rank-team-4');
var transformProperty = getSupportedPropertyName(transform);
var teams = ['team-1', 'team-2', 'team-3', 'team-4'];
var teamItems = [
  team_1_item,
  team_2_item,
  team_3_item,
  team_4_item
];
var teamScores = [
  team_score_1,
  team_score_2,
  team_score_3,
  team_score_4
];
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
var scores = [1,1,1,1];
var racerPositions = [1,1,1,1];
var sortedScores = [];

function getSupportedPropertyName(properties) {
  for (var i = 0; i < properties.length; i++) {
    if (typeof document.body.style[properties[i]] != "undefined") {
      return properties[i];
    }
  }
  return null;
}

function getScore() {
  scores = scoreGen(scores);
  racerPositions = convertScores(scores);
}

function getPosition(i) {
  var rankIndex;

  sortedScores = scores.slice(0);
  //sortedScores.sort(function(a, b){return a-b}); //standard JS way to sort
  insertionSort(sortedScores, 0, sortedScores.length - 1); //my way, just because I can
  rankIndex = sortedScores.findIndex(function(a){return a>=scores[i]});

  return rankIndex;
}

function upPoints() {
  getScore();
  for (var i=0; i < racerPositions.length; i++) {
    var y = racerPositions[i] + '%';
    if (transformProperty) {
      teamItems[i].style[transformProperty] = 'translate3d(0, ' + y + ', 0)';
    }
    teamScores[i].innerHTML = '<strong>'+ scores[i] +'<strong>';
    var rankindex = getPosition(i);
    teamRanks[i].innerHTML = ranks[rankindex];
    if (rankindex === 3) {
      teamItems[i].classList.add('winner');
    } else {
      teamItems[i].classList.remove('winner');
    }
  }
}

var timer = setInterval(upPoints, 500);

setTimeout(function() {clearInterval(timer)}, 30000);
'use strict';

// Called by convertScores.js
module.exports = function (array, left, right) {
  function less(v, w) {
    return v < w;
  }
  function exch(a,i,j) {
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  function compExch(a,i,j) {
    if (less(a[j], a[i])) exch(a,i,j);
  }

  var i;
  for(i = right; i > left; i--) {
    compExch(array, i-1, i);
  }
  for(i = left + 2; i <= right; i++) {
    var j = i;
    var v = array[i];
    while (less(v,array[j-1])) {
      array[j] = array[j-1];
      j--;
    }
    array[j] = v;
  }
};
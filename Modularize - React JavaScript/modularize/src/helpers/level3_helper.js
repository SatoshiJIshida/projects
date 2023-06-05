"use strict";

/**
 * TESTING Jest Mock Timer
 * Library Jest taken from source https://jestjs.io/docs/timer-mocks
 * @callback callback
 */
function timer(callback) {
  console.log("Start");
  setTimeout(() => {
    console.log("Timer ends");
    callback && callback();
  }, 1000);
}

module.exports = timer;

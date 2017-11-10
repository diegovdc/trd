"use strict";

var pipe = function pipe(fn) {
  for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  return function () {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, fn.apply(undefined, arguments));
  };
};
var thread = function thread(thing) {
  for (var _len2 = arguments.length, fns = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    fns[_key2 - 1] = arguments[_key2];
  }

  return pipe.apply(undefined, fns).apply(null, thing);
};
module.exports = { thread: thread, pipe: pipe };
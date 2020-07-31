"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.betterRequire = void 0;

var betterRequire = function betterRequire(absPath) {
  //两种引入方式
  var module = require(absPath);

  if (module["default"]) {
    return module["default"];
  }

  return module;
};

exports.betterRequire = betterRequire;
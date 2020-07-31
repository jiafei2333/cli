"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./utils/common");

var _path = require("path");

// let apply = () => {}
// export default apply;
//命令行的命令名称拿到后  这个是主流程控制的地方
//动态加载文件
var apply = function apply(action) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  //console.log("index:",action, args)
  //babel-env  export default=>module.exports={default:xxx}
  (0, _common.betterRequire)((0, _path.resolve)(__dirname, "./".concat(action))).apply(void 0, args); //默认导出
};

var _default = apply;
exports["default"] = _default;
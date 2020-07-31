"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _git = require("./utils/git");

var _ora = _interopRequireDefault(require("ora"));

var _inquirer = _interopRequireDefault(require("inquirer"));

//下载模板 选择模板使用
//用过配置文件 获取模板信息(有哪些模板)
//进度条
//命令交互
var install = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var loading, list, answer, project, tag;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loading = (0, _ora["default"])('fetching template ......');
            loading.start();
            _context.next = 4;
            return (0, _git.repoList)();

          case 4:
            list = _context.sent;
            loading.succeed();
            list = list.map(function (_ref2) {
              var name = _ref2.name;
              return name;
            });
            console.log("模板列表list：", list);
            _context.next = 10;
            return _inquirer["default"].prompt([{
              type: 'list',
              name: 'project',
              message: 'pleace choice template:',
              choices: list
            }]);

          case 10:
            answer = _context.sent;
            // console.log("answer:",answer.project);
            //拿到当前项目
            project = answer.project; //获取当前的项目的版本号

            loading = (0, _ora["default"])('fetching tag ......');
            loading.start();
            _context.next = 16;
            return (0, _git.tagList)(project);

          case 16:
            list = _context.sent;
            loading.succeed();
            list = list.map(function (_ref3) {
              var name = _ref3.name;
              return name;
            });
            tag = answer.tag;
            console.log("tag:", tag); //下载文件(先下载到缓存区文件中)
            //下载中...

            loading = (0, _ora["default"])('download project ......');
            loading.start(); //console.log(project,tag);

            _context.next = 25;
            return (0, _git.downloadLocal)(project, tag);

          case 25:
            loading.succeed();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function install() {
    return _ref.apply(this, arguments);
  };
}();

var _default = install;
exports["default"] = _default;
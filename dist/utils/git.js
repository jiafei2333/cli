"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLocal = exports.download = exports.repoList = exports.tagList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fetch = _interopRequireDefault(require("fetch"));

var _rc = require("./rc");

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _constants = require("./constants");

var fetchFun = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              _fetch["default"].fetchUrl(url, function (error, meta, body) {
                //console.log("data:--",body);
                console.log("fetch error:", error);
                resolve(JSON.parse(body));
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchFun(_x) {
    return _ref.apply(this, arguments);
  };
}(); //链接地址：https://api.github.com/repos/jiafei2333/react-template/tags 版本


var tagList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(repo) {
    var config, api;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _rc.getAll)();

          case 2:
            config = _context2.sent;
            api = "https://api.github.com/repos/".concat(config.registry, "/").concat(repo, "/tags");
            _context2.next = 6;
            return fetchFun(api);

          case 6:
            return _context2.abrupt("return", _context2.sent);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function tagList(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //链接地址：https://api.github.com/users/jiafei2333/repos 项目


exports.tagList = tagList;

var repoList = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var config, api;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _rc.getAll)();

          case 2:
            config = _context3.sent;
            //console.log("repoList-config:",config);
            api = "https://api.github.com/".concat(config.type, "/").concat(config.registry, "/repos"); //console.log("repoList:api",api)

            _context3.next = 6;
            return fetchFun(api);

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function repoList() {
    return _ref3.apply(this, arguments);
  };
}();

exports.repoList = repoList;

var download = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(src, dest) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              (0, _downloadGitRepo["default"])(src, dest, function (err) {
                if (err) {
                  reject(err);
                }

                resolve();
              });
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function download(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}(); //下载到本地


exports.download = download;

var downloadLocal = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(project, version) {
    var config, api;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _rc.getAll)();

          case 2:
            config = _context5.sent;
            api = "".concat(config.registry, "/").concat(project);

            if (version) {
              api += "#".concat(version);
            }

            _context5.next = 7;
            return download(api, _constants.DOWNLOAD + '/' + project);

          case 7:
            return _context5.abrupt("return", _context5.sent);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function downloadLocal(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

exports.downloadLocal = downloadLocal;
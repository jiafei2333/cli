"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = exports.remove = exports.set = exports.get = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _constants = require("./constants.js");

var _ini = require("ini");

var _util = require("util");

var _fs = _interopRequireDefault(require("fs"));

var _process = require("process");

//RC是配置文件 DEFAULT是默认配置
//promisify：异步函数promise化
//格式分析和序列化
var exists = (0, _util.promisify)(_fs["default"].exists); //测试某个路径下的文件是否存在

var readFile = (0, _util.promisify)(_fs["default"].readFile);
var writeFile = (0, _util.promisify)(_fs["default"].writeFile);

var get = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(k) {
    var has, opts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return exists(_constants.RC);

          case 2:
            has = _context.sent;

            if (!has) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return readFile(_constants.RC, 'utf8');

          case 6:
            opts = _context.sent;
            opts = (0, _ini.decode)(opts);
            return _context.abrupt("return", opts[k]);

          case 9:
            return _context.abrupt("return", '');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.get = get;

var set = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(k, v) {
    var has, opts;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return exists(_constants.RC);

          case 2:
            has = _context2.sent;

            if (!has) {
              _context2.next = 11;
              break;
            }

            _context2.next = 6;
            return readFile(_constants.RC, 'utf8');

          case 6:
            opts = _context2.sent;
            opts = (0, _ini.decode)(opts);
            Object.assign(opts, (0, _defineProperty2["default"])({}, k, v));
            _context2.next = 12;
            break;

          case 11:
            opts = Object.assign(_constants.DEFAULTS, (0, _defineProperty2["default"])({}, k, v));

          case 12:
            _context2.next = 14;
            return writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf8');

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function set(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.set = set;

var remove = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(k) {
    var has, opts;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return exists(_constants.RC);

          case 2:
            has = _context3.sent;

            if (!has) {
              _context3.next = 11;
              break;
            }

            _context3.next = 6;
            return readFile(_constants.RC, 'utf8');

          case 6:
            opts = _context3.sent;
            opts = (0, _ini.decode)(opts);
            delete opts[k];
            _context3.next = 11;
            return writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf8');

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function remove(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.remove = remove;

var getAll = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var has, opts;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log("RC file: ", _constants.RC);
            _context4.next = 3;
            return exists(_constants.RC);

          case 3:
            has = _context4.sent;

            if (!has) {
              _context4.next = 10;
              break;
            }

            _context4.next = 7;
            return readFile(_constants.RC, 'utf8');

          case 7:
            opts = _context4.sent;
            //console.log("opts:",opts);
            opts = (0, _ini.decode)(opts); // console.log("decode-opts:",opts);

            return _context4.abrupt("return", opts);

          case 10:
            return _context4.abrupt("return", {});

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getAll() {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAll = getAll;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _rc = require("./utils/rc.js");

//专门管理.jfclirc文件(当前的用户目录下)
//jiafei2333-cli config set key value
var config = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(action, k, v) {
    var key, obj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = action;
            _context.next = _context.t0 === 'get' ? 3 : _context.t0 === 'set' ? 14 : _context.t0 === 'remove' ? 16 : 18;
            break;

          case 3:
            if (!k) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return (0, _rc.get)(k);

          case 6:
            key = _context.sent;
            _context.next = 13;
            break;

          case 9:
            _context.next = 11;
            return (0, _rc.getAll)();

          case 11:
            obj = _context.sent;
            Object.keys(obj).forEach(function (key) {
              console.log("".concat(key, "=").concat(obj[key]));
            });

          case 13:
            return _context.abrupt("break", 18);

          case 14:
            (0, _rc.set)(k, v);
            return _context.abrupt("break", 18);

          case 16:
            (0, _rc.remove)(k);
            return _context.abrupt("break", 18);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function config(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = config;
exports["default"] = _default;
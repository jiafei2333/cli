"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _commander = _interopRequireDefault(require("commander"));

var _constants = require("./utils/constants");

var _index = _interopRequireDefault(require("./index"));

// console.log('hello!');
//多种功能命令
var actionMap = {
  install: {
    //配置命令的名字
    alias: 'i',
    //命令别的名称
    description: 'install template',
    //命令对应的描述
    examples: [//命令对应的模板
    'jiafei2333-cli i', 'jiafei2333-cli install']
  },
  config: {
    alias: 'c',
    description: 'config .jfclirc',
    examples: ['jiafei2333-cli config set <k> <v>', 'jiafei2333-cli config get <k>', 'jiafei2333-cli config remove <k>']
  },
  '*': {
    alias: "",
    description: 'not found',
    examples: []
  }
};
Object.keys(actionMap).forEach(function (action) {
  _commander["default"].command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(function () {
    console.log("action:", action); //判断一下当前用的是什么操作

    if (action === 'config') {
      //实现更改配置文件
      console.log(process.argv); //数组

      _index["default"].apply(void 0, [action].concat((0, _toConsumableArray2["default"])(process.argv.slice(3))));
    } else if (action === 'install') {
      (0, _index["default"])(action);
    }
  });
});

function help() {
  // console.log('123')//把example显示出去
  console.log('\r\n  ' + 'how to use command');
  Object.keys(actionMap).forEach(function (action) {
    actionMap[action].examples.forEach(function (example) {
      console.log('  - ' + example);
    });
  });
}

_commander["default"].on('-h', help);

_commander["default"].on('--help', help);

_commander["default"].version(_constants.VERSION, '-v --version').parse(process.argv);
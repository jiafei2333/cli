"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULTS = exports.RC = exports.DOWNLOAD = exports.VERSION = void 0;

var _package = require("../../package.json");

//找到用户的根  目录
var HOME = process.env[process.platform === 'win32' ? "USERPROFILE" : "HOME"]; //console.log(process.platform)//win32  node运行的操作系统的环境时显示内核相关的信息
//process.env.USERPROFILE  //当前目录下配置的文件

//当前package.json的版本号
var VERSION = _package.version;
exports.VERSION = VERSION;
var DOWNLOAD = 'DOWNLOAD'; // 下载当前地址下面

exports.DOWNLOAD = DOWNLOAD;
var RC = "".concat(HOME, "/.jfclirc"); //RC配置下载(模板)的地方
//给github的api来用的

exports.RC = RC;
var DEFAULTS = {
  registry: 'jiafei2333',
  type: 'users'
};
exports.DEFAULTS = DEFAULTS;
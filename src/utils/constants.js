//找到用户的根  目录
const HOME = process.env[process.platform === 'win32' ? "USERPROFILE" : "HOME"];
//console.log(process.platform)//win32  node运行的操作系统的环境时显示内核相关的信息
//process.env.USERPROFILE  //当前目录下配置的文件
import { version } from "../../package.json";
//当前package.json的版本号
export const VERSION = version;
export const DOWNLOAD = 'DOWNLOAD'; // 下载当前地址下面

export const RC = `${HOME}/.jfclirc`;

//RC配置下载(模板)的地方
//给github的api来用的
export const DEFAULTS = {
    registry: 'jiafei2333',
    type: 'users'
}
import {RC, DEFAULTS} from './constants.js'
//RC是配置文件 DEFAULT是默认配置
//promisify：异步函数promise化
import {decode,encode} from 'ini'//格式分析和序列化
import { promisify } from 'util';
import fs from 'fs';
import { exit } from 'process';


let exists = promisify(fs.exists);//测试某个路径下的文件是否存在
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);


export let get = async (k) => {
    //console.log(k)
    let has = await exists(RC);
    let opts;
    if (has) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts[k];
    }
    return '';
}
export let set = async (k, v) => {
    let has = await exists(RC);
    let opts;
    if (has) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        Object.assign(opts, { [k]: v });
    }else{
        opts=Object.assign(DEFAULTS,{[k]:v})
    }
    await writeFile(RC,encode(opts),'utf8');
}
export let remove = async (k) => {
    let has=await exists(RC);
    let opts;
    if(has){
        opts=await readFile(RC,'utf8');
        opts=decode(opts);
        delete opts[k];
        await writeFile(RC,encode(opts),'utf8')
    }
}
export let getAll = async () => {
    console.log("getAll:",RC);
    let has=await exists(RC);
    console.log("has:",has);
    let opts;
    if(has){
        opts=await readFile(RC,'utf8');
        console.log("opts:",opts);
        opts=decode(opts);
        console.log("decode-opts:",opts);
        return opts;
    }
    return {}
}
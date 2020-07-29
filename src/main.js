// console.log('hello!');

import program from "commander";
import {  VERSION  } from "./utils/constants";
import main from './index';
//多种功能命令
let actionMap={
    install:{//配置命令的名字
        alias:'i',//命令别的名称
        description:'install template', //命令对应的描述
        examples:[//命令对应的模板
            'jiafei2333-cli i',
            'jiafei2333-cli install'
        ]
    },
    config:{
        alias:'c',
        description:'config .jfclirc',
        examples:[
            'jiafei2333-cli config set <k> <v>',
            'jiafei2333-cli config get <k>',
            'jiafei2333-cli config remove <k>'
        ]
    },
    '*':{
        alias:"",
        description:'not found',
        examples:[]
    }
}

Object.keys(actionMap).forEach(action=>{
    program.command(action)
        .description(actionMap[action].description)
        .alias(actionMap[action].alias)
        .action(()=>{
            console.log("action:",action)
           //判断一下当前用的是什么操作
           if(action === 'config'){
                //实现更改配置文件
                console.log(process.argv)//数组
                main(action,...process.argv.slice(3));
            }else if(action === 'install'){
                main(action)
            }
            
        })
})

function help(){
    // console.log('123')//把example显示出去
    console.log('\r\n  '+'how to use command');
    Object.keys(actionMap).forEach(action=>{
        actionMap[action].examples.forEach(example=>{
            console.log('  - '+example)
        })
    })
}
program.on('-h',help);
program.on('--help',help);
program.version(VERSION, '-v --version').parse(process.argv);
export const betterRequire = (absPath) => {//两种引入方式
    let module = require(absPath);
    if(module.default){
        return module.default;
    }
    return module;
}
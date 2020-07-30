import fetch from 'fetch';
import { getAll } from './rc'
import downLoadGit from 'download-git-repo';
import {DOWNLOAD} from './constants'

let fetchFun =  async (url) => {
    console.log("fetch::::",url)
    return new Promise((resolve, reject) => {
        
        fetch.fetchUrl(url,function(error, meta,body){
            console.log("data:--",body);
            resolve(JSON.parse(body));
        })
    })
}


//链接地址：https://api.github.com/repos/jiafei2333/react-template/tags 版本
export let tagList = async (repo) => {
    let config = await getAll();
    let api = `https://api.github.com/repos/${config.registry}/${repo}/tags`;
    return await fetchFun(api)
}

//链接地址：https://api.github.com/orgs/jiafei2333/repos 项目
export let repoList = async () => {
    console.log("repoList:-------",)
    let config = await getAll();
    console.log("repoList-config:",config);
    let api = `https://api.github.com/${config.type}/${config.registry}/repos`;
    console.log("repoList:api",api)
    return await fetchFun(api);
}


export let download = async (src, dest) => {
    return new Promise((resolve, reject) => {
        downLoadGit(src, dest, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}


//下载到本地
export let downloadLocal = async (project, version) => {
    let config=await getAll()
    let api =`${config.registry}/${project}`;
    if(version){
        api += `#${version}`;
    }
    return await download(api,DOWNLOAD+'/'+project);
}
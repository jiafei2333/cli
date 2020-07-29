import request from 'request';
import { getAll } from './rc'
import downLoadGit from 'download-git-repo';
import {DOWNLOAD} from './constants'

let fetch = async (url) => {
    return new Promise((resolve, reject) => {
        let config = {
            url,
            method: 'get',
            headers: {
                'user-agent': 'xxx'
            }
        }
        console.log("fetch:config:",config);
        request(config, (err, response, body) => {
            if (err) {
                reject(err);
            }
            console.log("fetch:request:",body);
            resolve(JSON.parse(body))
        })
    })
}


//链接地址：https://api.github.com/repos/jiafei2333/react-template/tags 版本
export let tagList = async (repo) => {
    let config = await getAll();
    let api = `https://api.github.com/repos/${config.registry}/${repo}/tags`;
    return await fetch(api)
}

//链接地址：https://api.github.com/orgs/jiafei2333/repos 项目
export let repoList = async () => {
    console.log("repoList:-------",)
    let config = await getAll();
    console.log("repoList-config:",config);
    let api = `https://api.github.com/${config.type}/${config.registry}/repos`;
    console.log("repoList:api",api)
    return await fetch(api);
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
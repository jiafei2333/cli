//下载模板 选择模板使用
//用过配置文件 获取模板信息(有哪些模板)
import { repoList, tagList, downloadLocal,} from './utils/git';
import ora from 'ora';//进度条
import inquirer from 'inquirer';//命令交互

let install = async () => {

    let loading = ora('fetching template ......');
    loading.start()
    let list = await repoList();
    loading.succeed();
    list = list.map(({name}) => name);
    console.log("模板列表list：",list);
    let answer = await inquirer.prompt([{
        type: 'list',
        name: 'project',
        message: 'place choice template:',
        choices: list
        
    }]);
    // console.log("answer:",answer.project);
    //拿到当前项目
    let project = answer.project;
    //获取当前的项目的版本号
    loading = ora('fetching tag ......');
    loading.start();
    list = await tagList(project);
    loading.succeed();
    list = list.map(({name}) => name);
    let tag=answer.tag;
    console.log("tag:",tag);
    //下载文件(先下载到缓存区文件中)

    //下载中...
    loading=ora('download project ......');
    loading.start();
    //console.log(project,tag);
    await downloadLocal(project,tag);
    loading.succeed();
}

export default install;
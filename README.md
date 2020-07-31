### 介绍

前端开发CLI工具


### 包使用步骤

1. 全局安装：`npm install -g jiafei2333-cli`

2. 查看命令：`jiafei2333-cli`

3. 安装配置文件：`jiafei2333-cli config set a 1`

3. 下载模板：`jiafei2333-cli i | install` 这里模板选择 `react-template`，也可以配置自己的模板


### 脚手架使用步骤

1. `yarn watch` 打开编译监听

2. `jiafei2333-cli` 查看命令行信息
    
3. 更改模板配置步骤：
    - 3.1 修改 utils/constants 中 DEFAULTS 的配置
    - 3.2 执行 `jiafei2333-cli config set registry xxxx`  |  `jiafei2333-cli config set type xxxx`  即可
    
4. 发布流程
   - 4.1 `nrm use npm` 切换npm源 (不是淘宝镜像可以跳过)
   - 4.2 `npm adduser` (第一次发包 npm login 先登录)
   - 4.3 `npm publish` (发布、更新包)


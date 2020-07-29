1. `yarn watch` 打开编译监听

2. `jiafei2333-cli` 查看命令行信息
    - 2.1 本地全局安装 npm install jiafei2333-cli -g
    - 2.2 jiafei2333-cli install 下载模板
    
3. 更改模板配置步骤：
    - 3.1 修改 utils/constants 中 DEFAULTS 的配置
    - 3.2 执行 jiafei2333-cli config set registry xxxx |
              jiafei2333-cli config set type xxxx  即可
              
4. 发布流程
   - 4.1 nrm use npm 切换npm源 (不是淘宝镜像可以跳过)
   - 4.2 npm adduser (第一次发包 npm login 先登录)
   - 4.3 npm publish
   - 4.4 npm unpublish --force 删除线上的包

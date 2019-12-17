# webpack4Hanzilu #

一个自用的webpack脚手架

使用：

    npm run dev:server 

功能：

- React技术栈
- 集成Typescript
- ES语法及类函数转换
- 使用dva作为数据流方案
- 集成redux中间件redux-logger，跟踪action及其dispatch前后状态的变化
- 用 React.lazy 实现懒加载
- 集成React的UI组件库antd
- 集成字体图标库Font Awesome
- 实现生产配置和开发配置分离
- 本地开发服务器搭建及热模块替换
- 各类文件压缩和打包优化
- 单元测试采用jest,enzyme
- json-server模拟服务器返回数据（当前项目使用nodejs本地爬虫）
- axios进行ajax请求
- 集成eslint检测和editorconfig配置
- 集成webpack-bundle-analyzer，实现输出文件体积与交互关系的可视化

## v1.0.3 （2019-12-17） ##

使用@babel/preset-typescript去替换awesome-typescript-loader。

## v1.0.2 （2019-12-13） ##

集成dva

数据流方案从 react-redux,redux-actions,redux-thunk,redux-promise 转变为基于 react-redux,redux-saga的dva

相关博客：[使用dva改造React旧项目的数据流方案](https://www.cnblogs.com/vvjiang/p/12037059.html)

## v1.0.1 （2019-11-26） ##

集成Typescript

相关博客：[在React旧项目中安装并使用TypeScript的实践](https://www.cnblogs.com/vvjiang/p/11944912.html)

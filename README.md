# webpack4Hanzilu #

一个自用的webpack脚手架

使用：

    npm run server // 先开启本地爬虫
    npm run dev // 再启动本地环境

功能：

- ES6语法与新增类函数支持
- 集成eslint检测和editorconfig配置
- 集成react,react-dom
- 使用dva作为数据流方案
- 集成redux中间件redux-logger，跟踪action及其dispatch前后状态的变化
- 用 React.lazy 实现懒加载
- 集成React的UI组件库antd
- 集成字体图标库Font Awesome
- 实现生产配置和开发配置分离
- 本地开发服务器搭建及热模块替换
- 各类文件压缩和打包优化
- 集成webpack-bundle-analyzer，实现输出文件体积与交互关系的可视化
- 单元测试采用jest,enzyme
- json-server模拟服务器返回数据（当前项目使用nodejs本地爬虫）
- axios进行ajax请求
- 集成Typescript

## v1.0.2 （2019-12-13） ##

集成dva

数据流方案从 react-redux,redux-actions,redux-promise 转变为基于 react-redux,redux-saga的dva

## v1.0.1 （2019-11-26） ##

集成Typescript

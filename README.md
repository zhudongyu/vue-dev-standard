# vue-dev-standard

> A Vue.js project for dev standard

> This is a front end Vue based project template that perfectly solves the problems 
  arising from the separation and development of the front and back ends

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```
.
├── build                                       // webpack 配置文件
├── config                                      // 项目打包路径
├── node_modules                                // npm 管理的包
├── src                                         // 源码目录
|   ├── api
|   |   └── index.js                            // 后端 API 接口配置
│   ├── assets                                  // 前端的静态资源文件会被打包 图片 、全局CSS  、字体 存放
│   │   ├──css                                  // 
│   │   │  └── variable.css                     // 全局变量CSS
│   │   │  └── main.css                         // 全局CSS 
│   │   │  └── reset.css                        // CSS重置文件
│   │   ├── fonts                               // 字体
│   │   ├── images                              // 图片
│   ├── components                              // 公用组件
│   │   ├── Footers.vue                         // 尾部组件
│   │   ├── Headers.vue                         // 头部组件
│   │   └── ...                                 // 
│   ├── tools                                   // 通用的工具函数或者过滤文件
│   │   └── ddyTools.js                         // 工具类
│   │   └── filters.js                          // vue全局过滤
│   ├── plugins                                 // 项目用到的非包的第三方插件
│   │   └── plugin-A.js                         // 
│   │   └── plugin-B.js                         // 
│   ├── router                                  // 路由配置
│   │   └── index.js                            // 
│   ├── store                                   // vuex 的状态管理
│   │   ├── index.js                            // vuex store入口文件
│   │   ├── state.js                            // 全局状态存储
│   │   ├── mutations.js                        // 全局commit
│   │   ├── actions.js                          // 全局dispatch
│   │   └── getters.js                          // 全局getters
|   ├── views                                   // 视图
│   │   ├── common.vue                          // 类似APP.vue的入口文件,方便日后的维护
│   │   ├── module-or-page                      // 模块或者页面
|   |   |   ├── api                             // 
|   |   |   |   └──index.js                     // 该模块或者页面的请求逻辑
|   |   |   ├── components                      // 组成该模块或者页面的组件
|   |   |   |   └── module-A.vue                // 
|   |   |   |   └── module-B.vue                // 
|   |   |   ├── store                           // 该模块或者页面下 vuex 的模块划分
|   |   |   |   └── module-A.js                 // 
|   |   |   |   └── module-B.js                 // 
|   |   |   ├── index.vue                       // 该模块或者组件的入口
│   │   ├── error                               // 请求错误状态页面
|   |   |   └──404.vue                          // 404 错误
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序/webpack入口文件
├── static                                      // 静态文件 不会被打包
|   ├── json                                    // json 文件
|   |   └── test.json                         
├── index.html                                  // 项目的入口 html 文件
├── .babelrc                                    // babel 配置
├── package.json                                // npm 包管理文件
.

```

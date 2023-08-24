# 基于vite架构的一个vue3模板

**项目介绍**：

​	`利用vite进行搭建一个vue项目，其中内置了多个插件，打包优化的插件，eslint定制代码规则的插件，和使用postcss进行css的代码兼容的插件，当然还有对js代码降级的插件，也简单手写了几个插件，设置路径的插件，导入mock的插件等等`

- ​	其中内置了环境的配置，开发，测试，生产环境都搭建好了，包括axios的二次封装，拦截器的基本模板也创建好了，
- ​	内置了mockjs，来针对你开发环境的网络请求数据，
- ​	安装了pinia来作为数据存储的仓库，也已经帮你完成了模块化和数据的持久化，	内置了vue-router（这里会写一个工程化动态创建路由的模块，到时候会上传为单独的文件，因为考虑到会有动态路由导入的问题，所以还会写一个导入动态路由的模板，到时候会和路由拦截一起去上传）



运行项目：

安装所有依赖

```
yarn ||  yarn install
```

运行开发环境

```
yarn dev
```

生成环境打包

```
yarn build
```

在生产环境下运行项目

```
yarn preview
```

运行测试环境

```
yarn test
```



运行的项目的操作还可以根据自己的喜好去添加删除，在package.json文件中的script里进行修改
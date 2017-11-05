# backend koa2  starry-sky      
 
## 环境安装
### 全局包
```
npm i -g nodemon 
npm i -g pm2
npm i -g rimraf
or 
npm i -g nodemon pm2 rimraf
```
## 初始化操作
```
npm i 
npm run init
```

 
## 启动方式

### 最简单启动方式

```
node bin/run
```

最常用的集成nodemon的方式,代码变动会自动重载(其实就是nodemon去执行bin/run)

```
npm start
```

支持pm2部署

```
 #npm run pm2
or
 pm2 start bin/run 
```
 

## 目录结构

``` 
.
├── LICENSE
├── README.md
├── app.js
├── bin
│   ├── run
│   └── www
├── node_modules 
│   ├── debug
│   ├── ejs
│   ├── jade
│   ├── koa
│   ├── koa-bodyparser
│   ├── koa-convert
│   ├── koa-json
│   ├── koa-logger
│   ├── koa-onerror
│   ├── koa-router
│   ├── koa-static
│   ├── koa-views
│   ├── nodemon
│   └── runkoa
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── server
│   ├── routes
│   ├── views  
│   ├── test
│   ├── index.js 
└── temp 
└── frontend
 
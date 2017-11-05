import Koa from 'koa';
export const app = new Koa();
//加载中间件
const loadMiddleware = (name, ...args) => {
        return require('./server/middlewares/' + name).apply(null, args);
    }
    //cookie 密钥
    //在进行cookie签名时，只有设置 signed 为 true 的时候，才会使用密钥进行加密：
    //this.cookies.set('name', 'tobi', { signed: true });
app.keys = [global.APP_CONFIG.secret || "secret key string"];
//请求消耗时间统计logger
app.use(loadMiddleware('timeLogger'));
// middlewares
// 全局错误处理
app.use(loadMiddleware('globalError'));
// 使用自定义错误
app.use(loadMiddleware('error'));
// 发送文件，如HTML
app.use(loadMiddleware('send'));
//网页图标
app.use(loadMiddleware('favicon'));
// //配合etag 
app.use(loadMiddleware('conditional'));
// //etag 客户端缓存处理
app.use(loadMiddleware('etag'));
// body解析
app.use(loadMiddleware('bodyParser'));
// 传输JSON
app.use(loadMiddleware('json'));
// 记录所用方式与时间
app.use(loadMiddleware('logger'));
// 静态文件夹
app.use(loadMiddleware('static', global.APP_CONFIG.staticPath));
// 文件上传对应的静态文件夹
app.use(loadMiddleware('static', global.APP_CONFIG.uploadPath, global.APP_CONFIG.uploadStaticPrefix));
//模板文件
app.use(loadMiddleware('views'));
//session处理
app.use(loadMiddleware('session'));
//其它处理
require('./server')(app);
// response 
app.on('error', (err, ctx) => {
    console.log(err);
    console.error('server error', err, ctx);
});
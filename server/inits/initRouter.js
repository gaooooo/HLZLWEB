import koaRouter from 'koa-router';
//根路由
const route = koaRouter();
export default {
    init(app, { debug }) {
        const routeItems = require('../routes').get({ debug });
        app.use(async(ctx, next) => {
            await next();
            if (ctx.status === 404) {
                await ctx.render('pug/404.pug');
            }
        });
        route.use(async(ctx, next) => {
            debug('route-before');
            await next();
            debug('route-after');
        });
        //ueditor
        let ueditor = require('../../common/koaUeditor')(global.APP_CONFIG.staticPath);
        route.all('/ueditor/ue', ueditor);
        //end ueditor

        //默认访问路径
        route.get('/', async(ctx, next) => {
            await ctx.render('pug/index.pug');
        });
        _.each(routeItems, (routeItem) => {
            route.use('/' + routeItem.name, routeItem.route.routes(), routeItem.route.allowedMethods());
        });
        app.use(route.routes(), route.allowedMethods());
        //end router
    }
}
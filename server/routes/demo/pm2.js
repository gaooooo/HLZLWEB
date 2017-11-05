let pm2Helper = appUtils.requireCommon('pm2Helper');
export default (route) => {
    route.get('/', async(ctx, next) => {
        await pm2Helper.killDaemon();
        ctx.state.result = '杀掉了pm2守护进程'
        await ctx.render('pug/demo/pm2.pug');
    });
    route.get('/kill', async(ctx, next) => {
        await pm2Helper.killDaemon();
        ctx.state.result = '杀掉了pm2守护进程'
        await ctx.render('pug/demo/pm2-child.pug');
    });
    route.get('/start2', async(ctx, next) => {
        ctx.state = { title: 'pm2' };
        pm2Helper.start('C:/Users/58/Desktop/temp/koa2-backend2', {
            name: 'backend2222',
            env: { PORT: 5002, ENV_DATA: { a: 1, b: 2, c: 3 } }
        });
        await ctx.render('pug/demo/pm2-child.pug');
    });
    route.get('/start3', async(ctx, next) => {
        ctx.state = { title: 'pm2' };
        pm2Helper.start('C:/Users/58/Desktop/temp/koa2-backend3', {
            name: 'backend333',
            env: { PORT: 5003, ENV_DATA: { a: 1, b: 2, c: 3 } }
        });
        await ctx.render('pug/demo/pm2-child.pug');
    });
    route.get('/start4', async(ctx, next) => {
        ctx.state = { title: 'pm2' };
        pm2Helper.start('C:/Users/58/Desktop/temp/koa2-backend4', {
            name: 'backend444',
            env: { PORT: 5004, ENV_DATA: { a: 1, b: 2, c: 3 } }
        });
        await ctx.render('pug/demo/pm2-child.pug');
    });
    route.get('/list', async(ctx, next) => {
        let result = await appUtils.requireCommon('pm2Helper')
            .list();
        ctx.state.result = result.list.map((n) => {
            return { pid: n.pid, pm_id: n.pm_id, name: n.name, memory: n.monit.memory }
        });
        await ctx.render('pug/demo/pm2-child.pug');
    });
    route.get('/stop/:process', async(ctx, next) => {
        let { err } = await appUtils.requireCommon('pm2Helper')
            .stop(ctx.params.process);
        ctx.state.result = { err };
        await ctx.render('pug/demo/pm2-child.pug');
    });
    const npmHelper = appUtils.requireCommon('npmHelper');
    route.get('/install', async(ctx, next) => {
        let path = `C:/Users/58/Desktop/temp/koa2-backend2-test`;
        let result=npmHelper.install.yarn({ cwd: path });
        ctx.state.result = { result };
        await ctx.render('pug/demo/pm2-child.pug');
    });
    route.get('/install-npm', async(ctx, next) => {
        let path = `C:/Users/58/Desktop/temp/koa2-backend2-test`;
        let result=npmHelper.install.npm({ cwd: path });
        ctx.state.result = { result };
        await ctx.render('pug/demo/pm2-child.pug');
    });
    return route;
}
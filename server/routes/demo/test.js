let FtpHelper = appUtils.requireCommon('FtpHelper');
export default (route) => {
    route.get('/a', async(ctx, next) => {
        let content = '---';
        ctx.session.aaa = '312231231';
        ctx.state = {
            title: 'koa2 111',
            data: JSON.stringify(content)
        };
        await ctx.render('pug/tests.pug');
    });
    route.get('/data', async(ctx, next) => {
        ctx.body = { a: 1, b: 2, c: 3 };
    });


    route.get('/c', async(ctx, next) => {
        await ctx.send(ctx, 'index.html', { root: 'public/html' });
    });
    route.get('/d', async(ctx, next) => {
        let data = await IOHelper.readFile('./temp/ztest/abc.txt');
        let data2 = await IOHelper.readFile('./temp/ztest/111.js');
        let ddd = await Promise.all([IOHelper.readFile('./temp/ztest/abc.txt'), IOHelper.readFile('./temp/ztest/abc.txt')]);
        ctx.body = { a: 333, b: 444, c: 6566, data, data2, ddd };
    });


    route.get('/e', async(ctx, next) => {
        alert(21312)
        ctx.redirect('/tests/d');
    });


    route.get('/d', async(ctx, next) => {
        throw new ctx.Err({ message: '用户已存在', status: 400 });
    });

    route.get('/ftp1', async(ctx, next) => {
        let ftpHelper = new FtpHelper({
            host: 'localhost',
            port: 21
                //, user: 'appstatic',
                // password: 'siwgSfakqo'

            // host: 'static.upload.58dns.org',
            // port: 21,
            // user: 'appstatic',
            // password: 'siwgSfakqo'
        }, { prefix: '' });
        ctx.body = await ftpHelper.getListOnce('/');

    });

    route.get('/ftp2', async(ctx, next) => {
        let ftpHelper = new FtpHelper({
            host: 'localhost',
            port: 21
                //, user: 'appstatic',
                // password: 'siwgSfakqo'
        }, { prefix: '' });
        ctx.body = await ftpHelper.downloadOnce('temp/ftp2222222222222223333333.txt', 'xxx.txt');

    });


    route.get('/testio', async(ctx, next) => {
        let content = '---';


        var fs = require('graceful-fs');
        var stripBom = require('strip-bom');

        fs.readFile('./ztest/es6.js', (err, data) => {
            if (err) {
                return cb(err);
            }
            file.contents = stripBom(data);
            cb(null, file);
        });

        ctx.state = {
            title: 'koa2 111',
            data: JSON.stringify(content)
        };
        await ctx.render('tests');
    });
    route.post('/upload', require('../helper').upload.upload({ dest: '你好' }), async(ctx, next) => {
        ctx.body = 'aaaabbbddd';
    })
    route.get('/db', async(ctx, next) => {
        // let data = await DB.models.category.c_find({ condition: ctx.request.query || {}, sortBy: { order: 1 } });
        debugger
        let data = await DB.models.demo.c_add({ name: 'demoxxxxxxxx' });
        ctx.body = global.JSONResponse(1, data, '保存成功');
    })
    route.get('/db2', async(ctx, next) => {
        // let data = await DB.models.category.c_find({ condition: ctx.request.query || {}, sortBy: { order: 1 } });
        let data = await DB.models.project.c_add({
            code: 'woniu222',
            name: 'demoxxxxxxxx',
            createUser: 'createUser',
            gitUrl: 'sss',
            gitBranch: 'xx',
            describe: 'describe',
            envTypes: {
                test: { address: '1', status: 2, port: 4567, nodeEnv: [{ "test": "bbb" }] },
                prod: { address: '1', status: 2, port: 4567, nodeEnv: [{ "prod": "ccc" }] }
            }
        });
        ctx.body = global.JSONResponse(1, data, '保存成功');
    })

    route.get('/cache', async(ctx, next) => {
        APP_CACHE.set('abcfdf', 133)
        ctx.body = global.JSONResponse(1, 11, '保存成功');
    });
    route.post('/post', async(ctx, next) => {
        let x = ctx.request;
        debugger
        ctx.body = global.JSONResponse(1, 11, '保存成功');
    });
    return route;
};
let route = require('koa-router')();

module.exports = route;
// gitlab 相关操作
//新增
route.post('/addproject', async(ctx, next) => {
    console.log("ctx",ctx);
    let data = ctx.request.body;
    let result=await DB.models.project.c_add(data); 
    //save();

    ctx.body = global.JSONResponse(1, result, '新增成功'); 
});

route.get('/prolist', async(ctx, next) => {
    let data = await DB.models.project.c_find({ "condition": {} }); 
    //save();
    let responseData = data.map((n, i) => {
        n = n.toObject();
        var envTypes = n["envTypes"];
        n["key"]=n._id;
        n["t_address"] = envTypes["test"]["address"];
        n["t_status"] = envTypes["test"]["status"];
        n["t_port"] = envTypes["test"]["port"];

        n["p_address"] = envTypes["prod"]["address"];
        n["p_status"] = envTypes["prod"]["status"];
        n["p_port"] = envTypes["prod"]["port"];
        n["p_port"]
        return n;
    }) 
    ctx.body = global.JSONResponse(1, responseData, '查询成功'); 
});
route.get('/db2', async(ctx, next) => {
    // let data = await DB.models.category.c_find({ condition: ctx.request.query || {}, sortBy: { order: 1 } });
    let data = await DB.models.project.c_add({
        code: 'woniu',
        name: 'demoxxxxxxxx',
        createUser: 'createUser',
        gitUrl: 'sss',
        gitBranch: 'xx',
        envTypes: {
            test: { address: '1', status: 2, port: 4567, nodeEnv: [{ "test": "bbb" }] },
            prod: { address: '1', status: 2, port: 4567, nodeEnv: [{ "prod": "ccc" }] }
        }
    });
    ctx.body = global.JSONResponse(1, data, '保存成功');
})
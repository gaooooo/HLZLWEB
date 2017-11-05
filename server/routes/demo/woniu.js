let route = require('koa-router')();
// let gitlab=require(global.APP_CONFIG.commonPath+"/Gitlab");
let gitlab = appUtils.requireCommon(`Gitlab`);
let gitlabzip = appUtils.requireCommon(`GitlabZip`);

module.exports = route;
// gitlab 相关操作

route.get('/gitzip', async(ctx, next) => {
    gitlabzip.getArchive("http://gitlab.58corp.com/wuxianfe/RMS.git", function(data) {
        console.log("data", data);
    })
    ctx.body='gitzip'
});
route.get('/gitlab1', async(ctx, next) => {
    console.log("1111");
    var testDate = { "file_path": "admin/css/by-main_30527.css", "id_": "30527", "id": "1565" };

    // gitlab.getFile(testDate,(data)=>{
    //     console.log("data____"+ JSON.stringify(data) );
    //     ctx.body=global.JSONResponse(1, data, '新增成功2');
    // });

    // gitlab.getGitInfoById(testDate.id,(data)=>{
    //     console.log("data____"+ JSON.stringify(data) );
    //     ctx.body=global.JSONResponse(1, data, '新增成功2');
    // });

    // var testData = {
    // 		file_path: "admin/js/test1.js",
    // 		branch_name: 'master',
    // 		content: "2222",
    // 		commit_message: "commit success"
    // 	}
    // gitlab.createFile(testData,(data)=>{
    //     console.log("data____"+ JSON.stringify(data));
    //     ctx.body=global.JSONResponse(1, data, '新增成功2');
    // });
    // gitlab.updateFile(testData,(data)=>{
    //     console.log("data____"+ JSON.stringify(data));
    //     ctx.body=global.JSONResponse(1, data, '新增成功2');
    // });
    // gitlab.removeFile(testData,(data)=>{
    //     console.log("data____"+ JSON.stringify(data));
    //     ctx.body=global.JSONResponse(1, data, '新增成功2');
    // });



})




route.get('/api3', async(ctx, next) => {

    // let data = await DB.models.woniu.c_add({ "title": "woniu", "name": "llll" })
    let data = await DB.models.woniu.c_find1({ "condition": { "title": "woniu" } })
    ctx.body = global.JSONResponse(1, data, '新增成功2');
});

route.get('/test', async(ctx, next) => {

    // let data = await DB.models.woniu.c_add({ "title": "woniu", "name": "llll" })
    var data1 = {
            "name": "woniu",
            "test": "test",
        }
        // let data = await DB.models.woniu.c_find1({ "condition": { "title": "woniu" } })
        // ctx.body = global.JSONResponse(1, data, '新增成功2');
    ctx.body = global.JSONResponse(1, data1, '新增成功3');
});
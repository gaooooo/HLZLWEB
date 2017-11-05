let route = require('koa-router')();
let fstool = require('../../common/FsTool.js');
let ftptool = require('../../common/FtpTool.js');
// 获取配置文件
const conf = require('../../common/configs/index.js');
const soururl = conf.getSourUrl()["online"];

module.exports = route;
// gitlab 相关操作


//获取列表信息  type分三种类型
async function getCataList(road, type) {
    let childCatalog = [];
    let childFile = [];
    let backdata = {};
    let result = {};
    try {
        let ftptoolobj = new ftptool();
        backdata = await ftptoolobj.getList(road);
    } catch (err) {
        console.log(err);
    }

    for (var arr in backdata) {
        if (backdata[arr]["type"] == "d") {
            childCatalog.push(backdata[arr]);
        } else if (backdata[arr]["type"] == "-") {
            childFile.push(backdata[arr]["name"]);
        }
    }

    if (type == "d") {
        return childCatalog;
    } else if (type == "-") {
        return childFile;
    } else {
        result["catalog"] = backdata;
        result["childFile"] = childFile;
        result["childCatalog"] = childCatalog;
    }
    return result;
}


route.get('/catalist', async(ctx, next) => {
    let result = { "catalog": "", "path": ""};
    result["childFile"] = await getCataList(soururl["write_path"], "d");
    result["path"] = soururl["write_path"];
    ctx.body = global.JSONResponse(1, result, '查询成功');
});
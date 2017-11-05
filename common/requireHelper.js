//自动加载对应目录的文件内容
import requireDir from 'require-dir';//require-dir 会过滤掉自身 所以不用担心会引发递归调用问题 比如 requireDir('./')
import pathTool from 'path';
import IOHelper from './IOHelper';
export default {
    require(paths) {
        paths = _.isArray(paths) ? paths : [paths];
        let pathValue = pathTool.resolve.apply(null, paths);
        return require(pathValue);
    },
    requireRuled(paths, cb, filterCb) {
        paths = _.isArray(paths) ? paths : [paths];
        let pathValue = pathTool.resolve.apply(null, paths);
        let dirData = requireDir(pathValue);
        //路由转换操作  
        _.each(dirData, (result, name) => {
            if ((filterCb && filterCb(name)) || (!filterCb && this.nameRule(name))) { //非入口JS 并且文件名非下划线开头
                cb && cb(result, name);
            }
        });
    },
    //返回路径文件结果的数组   [{result,name}]
    requireDir(paths, cb) {
        let resultData = [];
        //路由转换操作  
        this.requireRuled(paths, (result, name) => {
            resultData.push({ result, name });
            cb && cb(result, name);
        });
        return resultData;
    },
    //返回路径文件结果的对象   {[name]:result}]
    requireDirKV(paths, cb) {
        let resultData = {};
        //路由转换操作  
        this.requireRuled(paths, (result, name) => {
            resultData[name] = result;
            cb && cb(result, name);
        });
        return resultData;
    },
    nameRule(name) {
        return !(/^(index|_)/.test(name));
    },
    //递归查找文件
    requireRecurse(path, filter, cb, filterCb) {
        let dirInfos = IOHelper.findRecurseSync(path, filter);
        let dirData = { arr: [], kv: {} };
        dirInfos.forEach((n) => {
            if (n.isFile) {
                //取得文件的相对路径名称且含文件名    xxx\\yyy.js=> xxx
                let dirname = pathTool.dirname(n.relative);
                //取得 yyy
                let name = pathTool.basename(n.relative, '.js');
                if ((filterCb && filterCb(name, dirname, n)) || (!filterCb && this.nameRule(name))) {
                    // xxx\\yyy => xxx/yyy
                    let fullname = IOHelper.replaceSep(pathTool.join(dirname, name)); //统一替换为正斜杠
                    let result = require(n.filePath);
                    cb && cb(fullname, result, n);
                    dirData.arr.push({ result, filePath: n.filePath, fullname, name, dirInfo: n });
                    dirData.kv[fullname] = result;
                }
            }
        });
        return dirData;
    }
};
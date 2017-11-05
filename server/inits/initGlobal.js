import path from 'path';
//程序根目录
global.ROOT_PATH = process.cwd();
//运行模式 开发还是上线
global.NODE_ENV = process.argv.NODE_ENV || 'development';
//配置模式 normal还是 other
global.CONFIG_MODE = process.argv.CONFIG_MODE || '';
//全局promise重新定义
global.Promise = require('bluebird');
//鲁大师
global._ = require('lodash');
//common文件路径
global.COMMON_PATH = path.resolve(ROOT_PATH, 'common');
//应用程序配置
global.APP_CONFIG = require(`../../common/configs/${global.CONFIG_MODE}appConfig`);

//通用文件流助手
global.IOHelper = require('../../common/IOHelper');
//异步处理promise库
global.Q = require("q");
//格式化JSON输出
global.JSONResponse = (status, data, message) => {
    return { status, data, message };
};
//全局工具方法
global.appUtils = {
    require(...paths) {
        return require(path.resolve.apply(null, paths));
    },
    requireLib(name) {
        return this.require(COMMON_PATH, 'libs', name);
    },
    requireCommon(...paths) {
        return this.require(COMMON_PATH, ...paths);
    },
    isDev() {
        return global.NODE_ENV !== 'production';
    }
};
 
//初始化数据库
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect(APP_CONFIG.mongodb, {
    server: {
        poolSize: 12,
        socketOptions: {
            keepAlive: 1
        }
    }
});
global.DB = { mongoose };
global.DB = Object.assign(global.DB, require('../database').database);
//初始化mongoCache 
const CachemanMongo = appUtils.requireLib('cacheman-mongo');
//应用程序缓存对象  支持异步操作
const cache = global.APP_CACHE = new CachemanMongo(APP_CONFIG.mongodb, { collection: APP_CONFIG.projectName + 'Cache' });
Promise.promisifyAll(cache);
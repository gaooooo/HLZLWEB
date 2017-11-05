import path from 'path';
export default {
    mongodb: 'mongodb://localhost:27017/starrySky',
    apiPrefix: 'api',
    hostPrefix: '', //应用程序上线域名前缀
    staticPath: path.join(global.ROOT_PATH, '../starry-sky-fe/dist'),
    viewPath: path.join(global.ROOT_PATH, 'server', 'views'),
    uploadPath: path.join(global.ROOT_PATH, 'upload'),
    uploadStaticPrefix: 'attachment',
    port: 3601,
    secret: 'superfe',
    projectName: 'starrySky'
};
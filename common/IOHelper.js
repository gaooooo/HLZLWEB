import promisedFsExtra from 'fs-extra-promise';
import pathModule from 'promise-path';
import pathTool from 'path';
import fileSystem from 'file-system';
import Promise from 'bluebird';
import dir from 'node-dir';
import mkdirpPromise from 'mkdirp-promise';
let dirPromised = Promise.promisifyAll(dir);
export default {
    pathTool,
    //递归查找文件目录
    findRecurseSync(path, filter) {
        let files = [];
        filter = filter || '**/*.*';
        fileSystem.recurseSync(path, filter, (filePath, relative, fileName) => {
            let pathName = this.getDirName(filePath);
            files.push({ pathName, filePath, relative, fileName, isFolder: !fileName ? true : undefined, isFile: fileName ? true : undefined });
        });
        return files;
    },
    //创建路径递归
    makeDir(directory) {
        return mkdirpPromise(directory);
    },
    //文件存在判断
    exists(path) {
        return new Promise((resolve) => {
            fileSystem.exists(path, (exists) => {
                resolve(exists);
            });
        })
    },
    //路径 转换
    // directoryTransform: (path, toPath) => {

    // },
    //获取目录地址
    getDirName(path) {
        return pathTool.dirname(path);
    },
    //获取文件名 如:a.jpg
    getBaseName(path, ext) {
        return pathTool.basename(path, ext);
    },
    //获取文件的拓展名如  :  .jpg
    getExtName(path) {
        return pathTool.extname(path);
    },
    //替换文件类型
    replaceFileNameExt(filePath, newExt) {
        let oldExt = this.getExtName(filePath);
        let dirName = this.getDirName(filePath);
        let fileName = this.getBaseName(filePath, oldExt);
        return this.pathTool.join(dirName, fileName + newExt);
    },
    //同步复制文件夹或文件
    copySync(path, toPath, options) {
        let error = null;
        try {
            fileSystem.copySync(path, toPath, options || {});
        } catch (e) {
            error = e;
        }
        return new Promise((resolve, reject) => {
            resolve({ error, path, toPath, options });
        });
    },
    //异步复制文件
    copy(path, toPath) {
        return promisedFsExtra.copy(path, toPath, function(err) {
            if (err) return console.error(err)
            console.log("success!")
        });
    },
    //读取文件内容
    readFile(path) {
        return pathModule.read(path, 'utf8');
    },
    readFileBuffer(path) {
        return promisedFsExtra.readFile(path);
    },
    //保存文件
    saveFile(path, content) {
        return pathModule.write(path, content || '')
            .then(function() {
                return { content, path };
            });
    },
    //删除文件或文件夹
    deleteFile(path) {
        return pathModule.clean(path)
            .then(function() {
                return { path };
            });
    },
    //创建或覆盖或追加文件
    writeFile(path, content, isAppend) {
        if (isAppend) {
            let findPromise = pathModule.find(path);
            findPromise = findPromise.then((files) => {
                if (files.length > 0) {
                    return this.readFile(files[0])
                } else {
                    return '';
                }
            });
            return findPromise.then((oldText) => {
                return this.saveFile(path, oldText + content);
            })
        }
        return this.saveFile(path, content);
    },
    //获取路径的文件信息 recursive:bool 是否递归查找
    getFileInfo(path, recursive) {
        let fileList = [];
        this.walk(path, fileList, recursive);
        return new Promise((resolve, reject) => {
            resolve(fileList);
        });
    },
    //将反斜杠 替换为正斜杠
    replaceSep: (path) => {
        return path.replace(/\\/g, '/');
    },
    walk(path, fileList, recursive) {
        let dirList = fs.readdirSync(path);
        dirList.forEach((item) => {
            if (fs.statSync(path + '/' + item).isFile()) {
                fileList.push({ file: path + '/' + item });
                console.log(path + '/' + item)
            }
        });
        dirList.forEach((item) => {
            if (fs.statSync(path + '/' + item).isDirectory()) {
                fileList.push({ folder: path + '/' + item });
                recursive && this.walk(path + '/' + item, fileList);
                console.log(path + '/' + item)
            }
        });
    }
};
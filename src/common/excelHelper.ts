// var xlsx = require('node-xlsx');
import xlsx from 'node-xlsx'
const { momentHelper } = appUtils.requireCommon()
export default {
    setExcelBody:  function (context, data, fileName) {
        var fileName = fileName || context.query.fileName || momentHelper().format('YYYYMMDDHHmmss') + '.xlsx';
        var _buffer = xlsx.build([{ name: 'sheet1', data: data }]);
        ///不需要写物理文件
        // var physicPath = path.join(Conf.uploadPath, 'excel');
        // COMMON.fileHelper.mkdirs(physicPath);//创建路径 
        // var fullPath = path.join(physicPath, fileName);
        // yield coFs.writeFile(fullPath, _buffer);
        // context.type = extname(fullPath);
        // context.body = yield coFs.readFile(_buffer);
        ///end 不需要写物理文件
        context.set('Content-disposition', 'attachment;filename=' + fileName);
        context.body = _buffer;
    }
}
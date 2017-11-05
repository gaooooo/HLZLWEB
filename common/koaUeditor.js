 import path from "path";
 import fs from 'fs';
 import thunkify from 'thunkify';
 import FtpHelper from './FtpHelper';

 let static_path = path.join(process.cwd(), 'public');
 let img_type = '.jpg .png .gif .ico .bmp .jpeg';
 let img_path = '/ueditor/upload/img';
 let files_path = '/ueditor/upload/file';


 async function ueditor(ctx, next) {
     if (ctx.query.action === 'config') {
         ctx.set("Content-Type", "json");
         ctx.redirect("/ueditor/nodejs/config.json");
     } else if (ctx.query.action === 'listimage') {
         ctx.body = await ue_pic_list(img_path, ctx.query.start, ctx.query.size);
     } else if (ctx.query.action === 'listfile') {
         ctx.body = await ue_pic_list(files_path, ctx.query.start, ctx.query.size);
     } else if (ctx.query.action === 'uploadimage' || ctx.query.action === 'uploadfile') {
         let parts = ctx.request.files;
         let part;
         let stream;
         let tmp_name;
         let file_path;
         let filename;
         let remotePath;
         //old
         //  while (parts.length) {
         //      part = parts.shift();
         //      // files are returned as readable streams
         //      // let's just save them to disk
         //      if (ctx.query.action === 'uploadimage' && img_type.indexOf(path.extname(part.name)) >= 0) {
         //          filename = 'pic_' + (new Date()).getTime() + '_' + part.name;
         //          file_path = path.join(img_path, filename);
         //      } else if (ctx.query.action === 'uploadfile') {
         //          filename = 'file_' + (new Date()).getTime() + '_' + part.name;
         //          file_path = path.join(files_path, filename);
         //      }
         //      stream = fs.createWriteStream(path.join(static_path, file_path));
         //      fs.createReadStream(part.path).pipe(stream);
         //      console.log('uploading %s -> %s', part.name, stream.path);
         //      tmp_name = part.name;
         //  }
         //FTP上传
         while (parts.length) {
             part = parts.shift();
             // files are returned as readable streams
             // let's just save them to disk
             if (ctx.query.action === 'uploadimage' && img_type.indexOf(path.extname(part.name)) >= 0) {
                 filename = 'pic_' + (new Date()).getTime() + '_' + part.name;
                 file_path = path.join(img_path, filename);

             } else if (ctx.query.action === 'uploadfile') {
                 filename = 'file_' + (new Date()).getTime() + '_' + part.name;
                 file_path = path.join(files_path, filename);

             }

             let ftpHelper = new FtpHelper({
                 host: '',
                 port: 21,
                 user: '',
                 password: ''
             }, { prefix: '' });
             let result = await ftpHelper.upload(part.path, file_path);
             ftpHelper.closeConnection();
             tmp_name = part.name;
             remotePath = '' + result.remotePath;
         }
         ctx.body = {
             'url': remotePath || file_path,
             'title': filename,
             'original': tmp_name,
             'state': 'SUCCESS'
         }
     } else {
         ctx.body = {
             'state': 'FAIL'
         };
     }


 }


 async function ue_pic_list(list_dir, start, size) {
     let list = [];
     let files = await thunkify(fs.readdir)(path.join(static_path, list_dir));
     for (let i in files) {
         if (i >= start && i < (parseInt(start) + parseInt(size))) {
             let file = files[i];
             //if(file_type.indexOf(path.extname(file)) >= 0 ){
             list.push({ url: path.join('/', list_dir, file) });
             //}
         }
     }
     return {
         "state": "SUCCESS",
         "list": list,
         "start": start,
         "total": files.length
     }
 }

 export default (staticPath) => {
     if (staticPath) {
         static_path = staticPath;
     }
     return ueditor;
 };
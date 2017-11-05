  import mkdirp from 'mkdirp-promise';
  import fsp from 'fs-promise';
  const dir = APP_CONFIG.uploadPath;
  //待初始化路径 
  let initDirs = [dir];
  initDirs.forEach((dir) => {
      const exists = fsp.existsSync(dir);
      if (!exists) {
          mkdirp(dir).then(() => {
              console.log(`directory:${dir} OK.`);
          });
      } else {
          console.log(`directory:${dir} OK.`);
      }
  });
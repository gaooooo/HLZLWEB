 //npm工具
 import spawnHelper from './spawnHelper';
 export default {
     install: {
         /**
          * 
          * @param {cwd} options 
          */
         yarn(options) {
             // let options = { cwd: demoPath };
             console.log(options)
             let result = spawnHelper.run('yarn', options)
         },
         npm(options) {
             // let options = { cwd: demoPath };
             console.log(options)
             let result = spawnHelper.run('npm', Object.assign({deps:['install']},options))
         }
     }
 }
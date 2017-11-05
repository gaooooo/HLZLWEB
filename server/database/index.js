 import modelBase from './models/_base';
 import mongoose from 'mongoose';
 let requireHelper = appUtils.requireCommon('requireHelper');

 let Schema = mongoose.Schema;
 export let database = {
     models: {}
 };
 //自动加载 无需人工引入文件  
 requireHelper.requireDir([__dirname, 'models'], (getSchema, modelName) => {
     let schema = getSchema(mongoose, Schema);
     schema.collection = {
         collection: `${modelName}s`
     };
     //创建时间 时间戳
     schema.Schema.createTime = {
         type: Schema.Types.Number,
         required: true
     };
     //创建时间 时间串 ('YYYY-MM-DD HH:mm:ss')
     schema.Schema.createTimeString = {
         type: Schema.Types.String,
         required: true
     };
     //更新时间 时间戳
     schema.Schema.updateTime = {
         type: Schema.Types.Number,
         required: true
     };
     //更新时间 时间串 ('YYYY-MM-DD HH:mm:ss')
     schema.Schema.updateTimeString = {
         type: Schema.Types.String,
         required: true
     };


     let modelSchema = new Schema(schema.Schema, schema.collection);
     modelSchema.pre('save', (next) => {
         next();
     });
     modelSchema.pre('update', (next) => {
         next();
     });
     _.each(_.extend({}, modelBase, schema.statics), (method, name) => {
         modelSchema.statics[name] = method;
     });
     database.models[modelName] = DB.mongoose.model(modelName, modelSchema);
     console.log("load mongoose model --> " + modelName);
 });
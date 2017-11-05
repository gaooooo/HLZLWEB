 /**
  * 案例代码
  * mongoose  mongoose
  * Schema   Schema
  */
 export default (mongoose, Schema) => {
     return {
         //定义mongodb的字段
         Schema: {
             name: {
                 type: Schema.Types.String,
                 required: true
             }
         },
         //静态方法
         statics: {
             save: () => {
                 let model = new this({ name: Math.random() + 'AAAAAAAAAAAAA' });
                 return model.save();
             },
             deleteById: function(id) {
                 return this.find({
                     '_id': id
                 }).remove().exec();
             },
             getTitleById: function(id) {
                 let data = this.c_findById(id);
                 return data.then((result) => { return result ? result.title : ''; });
             },
             add: () => {
                 var x = this.update({}, { name: 'xxxxxxxx' }, { multi: true }, () => {
                     console.log('update');
                 });
                 var model = new this({ name: Math.random() + 'AAAAAAAAAAAAA' });
                 return model.save();
             },
             getBlogById: function(id) {
                 return this.findOne({
                     '_id': id
                 }).exec();
             },
             getDemos: () => {
                 return this.find().exec();
             },
             getLatestPosts: () => {
                 return this
                     .find()
                     .sort('field -create_time')
                     .limit(15)
                     .find()
                     .exec();
             },
             getCategoryPosts: function(category) {
                 return this
                     .find({
                         'category': category
                     })
                     .sort('field -create_time')
                     .exec();
             },
             getBlogsByTag: function(tag) {
                 return this
                     .find({
                         'tags': tag
                     })
                     .sort('field -create_time')
                     .exec();
             },
             deleteById: function(id) {
                 return this.find({
                     '_id': id
                 }).remove().exec();
             }
         }
     }
 }
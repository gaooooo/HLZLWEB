/**
 * hospital
 */
export default (mongoose, Schema) => {
    return {
        //定义mongodb的字段
        props: {
            name: {
                type: Schema.Types.String,
                required: true
            },
            account: {
                type: Schema.Types.String,
                required: true
            },
            password: {
                type: Schema.Types.String,
                required: true
            },
            role: {
                type: Schema.Types.Number,
                required: true
            }
        },
        //静态方法
        statics: {
            save(data) {
                return this._add(data)
            },
            deleteById(id) {
                return this.find({
                    '_id': id
                }).remove().exec()
            },
            getTitleById(id) {
                let data = this._findById(id)
                return data.then((result) => { return result ? result.title : '' })
            },
            _find: function (param) {
                return this.find(param.condition).sort(param.sortBy || { createTime: -1 }).exec();
            },
            add(data) {
                // let x = this.update({}, { name: 'hanmeimei' }, { multi: true }, () => {
                //     console.log('update')
                // })
                let model = new this(data)
                return model.save()
            },
            getBlogById(id) {
                return this.findOne({
                    '_id': id
                }).exec()
            },
            getDemos() {
                return this.find().exec()
            },
            getLatestPosts() {
                return this
                    .find()
                    .sort('field -create_time')
                    .limit(15)
                    .find()
                    .exec()
            },
            getCategoryPosts(category) {
                return this
                    .find({
                        'category': category
                    })
                    .sort('field -create_time')
                    .exec()
            },
            getBlogsByTag(tag) {
                return this
                    .find({
                        'tags': tag
                    })
                    .sort('field -create_time')
                    .exec()
            }
        }
    }
}
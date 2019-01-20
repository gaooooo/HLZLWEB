/**
 * hospital
 */
export default (mongoose, Schema) => {
    return {
        //定义mongodb的字段
        props: {
            state: {
                type: Schema.Types.Number,
                required: true
            },
            hospital_name: {
                type: Schema.Types.String,
                required: false
            },
            hospital_account: {
                type: Schema.Types.String,
                required: false
            },
            qykfcws: {
                type: Schema.Types.Number,
                required: false
            },
            qyzzjhbfcws: {
                type: Schema.Types.Number,
                required: false
            },
            qyzchszs: {
                type: Schema.Types.Number,
                required: false
            },
            wzchszs: {
                type: Schema.Types.Number,
                required: false
            },
            cshlgzhszs: {
                type: Schema.Types.Number,
                required: false
            },
            cshlgzdhlryzqywsjsrydbl: {
                type: Schema.Types.Number,
                required: false
            },
            lcgwhszs: {
                type: Schema.Types.Number,
                required: false
            },
            qybqzchszs: {
                type: Schema.Types.Number,
                required: false
            },
            bqhsysjkfcwbl: {
                type: Schema.Types.Number,
                required: false
            },
            zzjhbfhszs: {
                type: Schema.Types.Number,
                required: false
            },
            zzjhbfhsysjkfcwbl: {
                type: Schema.Types.Number,
                required: false
            },
            ccubfhszs: {
                type: Schema.Types.Number,
                required: false
            },
            ccubfhsysjkfcwbl: {
                type: Schema.Types.Number,
                required: false
            },
            ssshszs: {
                type: Schema.Types.Number,
                required: false
            },
            ssshsysjkfssjbl: {
                type: Schema.Types.Number,
                required: false
            },
            txshszs: {
                type: Schema.Types.Number,
                required: false
            },
            txshsytxjbl: {
                type: Schema.Types.Number,
                required: false
            },
            qnlzhszs: {
                type: Schema.Types.Number,
                required: false
            },
            qybsxlhss: {
                type: Schema.Types.Number,
                required: false
            },
            ssxlhss: {
                type: Schema.Types.Number,
                required: false
            },
            ssysxlhszqyhsbl: {
                type: Schema.Types.Number,
                required: false
            },
            qybkxlhss: {
                type: Schema.Types.Number,
                required: false
            },
            bkxlhszbqyhsbl: {
                type: Schema.Types.Number,
                required: false
            },
            qydzxlhss: {
                type: Schema.Types.Number,
                required: false
            },
            dzxlhszbqqhsbl: {
                type: Schema.Types.Number,
                required: false
            },
            qyzzxlhss: {
                type: Schema.Types.Number,
                required: false
            },
            zzxlhszbqyhsbl: {
                type: Schema.Types.Number,
                required: false
            },
            hlglrybkysxlbl: {
                type: Schema.Types.Number,
                required: false
            },
            zyyxbyhzyhlzybyhss: {
                type: Schema.Types.Number,
                required: false
            },
            zzyxbyhzyhlzybyhszqyhsbl: {
                type: Schema.Types.Number,
                required: false
            },
            qyzrhszs: {
                type: Schema.Types.Number,
                required: false
            },
            fzrhszs: {
                type: Schema.Types.Number,
                required: false
            },
            qygzchsbl: {
                type: Schema.Types.Number,
                required: false
            },
            qyzghszs: {
                type: Schema.Types.Number,
                required: false
            },
            qyzjzchsbl: {
                type: Schema.Types.Number,
                required: false
            },
            qyhszs: {
                type: Schema.Types.Number,
                required: false
            },
            qyhszs2: {
                type: Schema.Types.Number,
                required: false
            },
            qycjzchsbl: {
                type: Schema.Types.Number,
                required: false
            },
            hlryxtjszyyzshjngwpxdbl: {
                type: Schema.Types.Number,
                required: false
            },
            wpjxwyzs: {
                type: Schema.Types.Number,
                required: false
            },
            qyyzkhszgrzzrs: {
                type: Schema.Types.Number,
                required: false
            },
            zkhszqyhsbl: {
                type: Schema.Types.Number,
                required: false
            },
            zzjhzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            xyjhzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            zlzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            ssszkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            jzjjzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            gkzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            jlzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            tnbzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            xdgyzxzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            qita: {
                type: Schema.Types.String,
                required: false
            },
            qita_desc: {
                type: Schema.Types.String,
                required: false
            },
            hlzlgljg: {
                type: Schema.Types.String,
                required: false
            },
            sfjlhlzlglwyh: {
                type: Schema.Types.String,
                required: false
            },
            kzhlxxhjs: {
                type: Schema.Types.String,
                required: false
            },
            lchlxxxt: {
                type: Schema.Types.String,
                required: false
            },
            lchlxxxt_desc: {
                type: Schema.Types.String,
                required: false
            },
            lnzkhszs: {
                type: Schema.Types.Number,
                required: false
            },
            qybqzs: {
                type: Schema.Types.Number,
                required: false
            },
            qysszrzzthlfwmsbqs: {
                type: Schema.Types.Number,
                required: false
            },
            zrzzthlfwbqzqybqsbl: {
                type: Schema.Types.Number,
                required: false
            },
            yywyzhlfwsfyy: {
                type: Schema.Types.String,
                required: false
            },
            kswyzhlfwsfbq: {
                type: Schema.Types.String,
                required: false
            },
            kswyzhlfwsfbq_count: {
                type: Schema.Types.Number,
                required: false
            },
            kswyzhlfwsfbq_desc: {
                type: Schema.Types.String,
                required: false
            },
            kswyzhlfwsfbq2: {
                type: Schema.Types.String,
                required: false
            },
            kswyzhlfwsfbq2_count: {
                type: Schema.Types.Number,
                required: false
            },
            kswyzhlfwsfbq2_desc: {
                type: Schema.Types.String,
                required: false
            },
            sfwglbhlzkpxjd: {
                type: Schema.Types.String,
                required: false
            },
            sfwglbhlzkpxjd_count: {
                type: Schema.Types.Number,
                required: false
            },
            sfwglbhlzkpxjd_desc: {
                type: Schema.Types.String,
                required: false
            },
            sfwglbhlzkpxjd2: {
                type: Schema.Types.String,
                required: false
            },
            sfwglbhlzkpxjd2_count: {
                type: Schema.Types.Number,
                required: false
            },
            sfwglbhlzkpxjd2_desc: {
                type: Schema.Types.String,
                required: false
            },
            qylsgjzyygljzdzkhlfabzs: {
                type: Schema.Types.Number,
                required: false
            },
            yyzdzyhlfasl: {
                type: Schema.Types.Number,
                required: false
            },
            qyzyhljskzxms: {
                type: Schema.Types.Number,
                required: false
            },
            qnzyhljskzzlt: {
                type: Schema.Types.Number,
                required: false
            },
            qyhllcdjlsrs: {
                type: Schema.Types.Number,
                required: false
            },
            qymnjssxsrs: {
                type: Schema.Types.Number,
                required: false
            },
            mnjsbkjyssxsrs: {
                type: Schema.Types.Number,
                required: false
            },
            mnjszyyxhzyhlzysxsrs: {
                type: Schema.Types.Number,
                required: false
            },
            mnjsjxhsrs: {
                type: Schema.Types.Number,
                required: false
            },
            gjjzykt: {
                type: Schema.Types.Number,
                required: false
            },
            ljjzykthdjf: {
                type: Schema.Types.Number,
                required: false
            },
            sbjzykt: {
                type: Schema.Types.Number,
                required: false
            },
            sbjzykthdjf: {
                type: Schema.Types.Number,
                required: false
            },
            sj: {
                type: Schema.Types.Number,
                required: false
            },
            sjhdjf: {
                type: Schema.Types.Number,
                required: false
            },
            qjzykt: {
                type: Schema.Types.Number,
                required: false
            },
            qjzykthdjf: {
                type: Schema.Types.Number,
                required: false
            },
            yjzykt: {
                type: Schema.Types.Number,
                required: false
            },
            yjzykthdjf: {
                type: Schema.Types.Number,
                required: false
            },
            hdkycgxm: {
                type: Schema.Types.Number,
                required: false
            },
            hxqkfbwz: {
                type: Schema.Types.Number,
                required: false
            },
            scisllws: {
                type: Schema.Types.Number,
                required: false
            },
            drzbcbzz: {
                type: Schema.Types.Number,
                required: false
            },
            drzbcbzz_desc: {
                type: Schema.Types.String,
                required: false
            },
            cbzz: {
                type: Schema.Types.Number,
                required: false
            },
            cbzz_desc: {
                type: Schema.Types.String,
                required: false
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
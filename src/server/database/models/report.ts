/**
 * hospital
 */
export default (mongoose, Schema) => {
    return {
        //定义mongodb的字段
        props: {
            hospital_name: {
                type: Schema.Types.String,
                required: true
            },
            hospital_account: {
                type: Schema.Types.String,
                required: true
            },
            qykfcws: {
                type: Schema.Types.Number,
                required: true
            },
            qyzzjhbfcws: {
                type: Schema.Types.Number,
                required: true
            },
            qyzchszs: {
                type: Schema.Types.Number,
                required: true
            },
            wzchszs: {
                type: Schema.Types.Number,
                required: true
            },
            cshlgzhszs: {
                type: Schema.Types.Number,
                required: true
            },
            cshlgzdhlryzqywsjsrydbl: {
                type: Schema.Types.Number,
                required: true
            },
            lcgwhszs: {
                type: Schema.Types.Number,
                required: true
            },
            qybqzchszs: {
                type: Schema.Types.Number,
                required: true
            },
            bqhsysjkfcwbl: {
                type: Schema.Types.Number,
                required: true
            },
            zzjhbfhszs: {
                type: Schema.Types.Number,
                required: true
            },
            zzjhbfhsysjkfcwbl: {
                type: Schema.Types.Number,
                required: true
            },
            ccubfhszs: {
                type: Schema.Types.Number,
                required: true
            },
            ccubfhsysjkfcwbl: {
                type: Schema.Types.Number,
                required: true
            },
            ssshszs: {
                type: Schema.Types.Number,
                required: true
            },
            ssshsysjkfssjbl: {
                type: Schema.Types.Number,
                required: true
            },
            txshszs: {
                type: Schema.Types.Number,
                required: true
            },
            txshsytxjbl: {
                type: Schema.Types.Number,
                required: true
            },
            qnlzhszs: {
                type: Schema.Types.Number,
                required: true
            },
            qybsxlhss: {
                type: Schema.Types.Number,
                required: true
            },
            ssxlhss: {
                type: Schema.Types.Number,
                required: true
            },
            ssysxlhszqyhsbl: {
                type: Schema.Types.Number,
                required: true
            },
            qybkxlhss: {
                type: Schema.Types.Number,
                required: true
            },
            bkxlhszbqyhsbl: {
                type: Schema.Types.Number,
                required: true
            },
            qydzxlhss: {
                type: Schema.Types.Number,
                required: true
            },
            dzxlhszbqqhsbl: {
                type: Schema.Types.Number,
                required: true
            },
            qyzzxlhss: {
                type: Schema.Types.Number,
                required: true
            },
            zzxlhszbqyhsbl: {
                type: Schema.Types.Number,
                required: true
            },
            hlglrybkysxlbl: {
                type: Schema.Types.Number,
                required: true
            },
            zyyxbyhzyhlzybyhss: {
                type: Schema.Types.Number,
                required: true
            },
            zzyxbyhzyhlzybyhszqyhsbl: {
                type: Schema.Types.Number,
                required: true
            },
            qyzrhszs: {
                type: Schema.Types.Number,
                required: true
            },
            fzrhszs: {
                type: Schema.Types.Number,
                required: true
            },
            qygzchsbl: {
                type: Schema.Types.Number,
                required: true
            },
            qyzghszs: {
                type: Schema.Types.Number,
                required: true
            },
            qyzjzchsbl: {
                type: Schema.Types.Number,
                required: true
            },
            qyhszs: {
                type: Schema.Types.Number,
                required: true
            },
            qyhszs2: {
                type: Schema.Types.Number,
                required: true
            },
            qycjzchsbl: {
                type: Schema.Types.Number,
                required: true
            },
            hlryxtjszyyzshjngwpxdbl: {
                type: Schema.Types.Number,
                required: true
            },
            wpjxwyzs: {
                type: Schema.Types.Number,
                required: true
            },
            qyyzkhszgrzzrs: {
                type: Schema.Types.Number,
                required: true
            },
            zkhszqyhsbl: {
                type: Schema.Types.Number,
                required: true
            },
            zzjhzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            xyjhzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            zlzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            ssszkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            jzjjzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            gkzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            jlzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            tnbzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            xdgyzxzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            qita: {
                type: Schema.Types.String,
                required: true
            },
            qita_desc: {
                type: Schema.Types.String,
                required: true
            },
            hlzlgljg: {
                type: Schema.Types.String,
                required: true
            },
            sfjlhlzlglwyh: {
                type: Schema.Types.String,
                required: true
            },
            kzhlxxhjs: {
                type: Schema.Types.String,
                required: true
            },
            lchlxxxt: {
                type: Schema.Types.String,
                required: true
            },
            lchlxxxt_desc: {
                type: Schema.Types.String,
                required: true
            },
            lnzkhszs: {
                type: Schema.Types.Number,
                required: true
            },
            qybqzs: {
                type: Schema.Types.Number,
                required: true
            },
            qysszrzzthlfwmsbqs: {
                type: Schema.Types.Number,
                required: true
            },
            zrzzthlfwbqzqybqsbl: {
                type: Schema.Types.Number,
                required: true
            },
            yywyzhlfwsfyy: {
                type: Schema.Types.String,
                required: true
            },
            kswyzhlfwsfbq: {
                type: Schema.Types.String,
                required: true
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
                required: true
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
                required: true
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
                required: true
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
                required: true
            },
            yyzdzyhlfasl: {
                type: Schema.Types.Number,
                required: true
            },
            qyzyhljskzxms: {
                type: Schema.Types.Number,
                required: true
            },
            qnzyhljskzzlt: {
                type: Schema.Types.Number,
                required: true
            },
            qyhllcdjlsrs: {
                type: Schema.Types.Number,
                required: true
            },
            qymnjssxsrs: {
                type: Schema.Types.Number,
                required: true
            },
            mnjsbkjyssxsrs: {
                type: Schema.Types.Number,
                required: true
            },
            mnjszyyxhzyhlzysxsrs: {
                type: Schema.Types.Number,
                required: true
            },
            mnjsjxhsrs: {
                type: Schema.Types.Number,
                required: true
            },
            gjjzykt: {
                type: Schema.Types.Number,
                required: true
            },
            ljjzykthdjf: {
                type: Schema.Types.Number,
                required: true
            },
            sbjzykt: {
                type: Schema.Types.Number,
                required: true
            },
            sbjzykthdjf: {
                type: Schema.Types.Number,
                required: true
            },
            sj: {
                type: Schema.Types.Number,
                required: true
            },
            sjhdjf: {
                type: Schema.Types.Number,
                required: true
            },
            qjzykt: {
                type: Schema.Types.Number,
                required: true
            },
            qjzykthdjf: {
                type: Schema.Types.Number,
                required: true
            },
            yjzykt: {
                type: Schema.Types.Number,
                required: true
            },
            yjzykthdjf: {
                type: Schema.Types.Number,
                required: true
            },
            hdkycgxm: {
                type: Schema.Types.Number,
                required: true
            },
            hxqkfbwz: {
                type: Schema.Types.Number,
                required: true
            },
            scisllws: {
                type: Schema.Types.Number,
                required: true
            },
            drzbcbzz: {
                type: Schema.Types.Number,
                required: true
            },
            drzbcbzz_desc: {
                type: Schema.Types.String,
                required: false
            },
            cbzz: {
                type: Schema.Types.Number,
                required: true
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
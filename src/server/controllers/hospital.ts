/**
 * hospital
 */
const { momentHelper } = appUtils.requireCommon()
export default ({ debug, logger }) => {
    const model = DB.models.hospital
    return {
        async add(params, query, fields) {
            fields.role = 2
            const result = await model._add(fields)
            return JSONResponse(1, result)
        },
        async delete(params, query, fields) {
            let ids = query.ids
            if (ids.length === 0) {
              return
            }
            let result = null
            ids.split(',').forEach(async x => {
                result = await model._delete({ condition: {_id: x} })
            })
            return JSONResponse(1, result)
        },
        async update(params, query, fields) {
            const result = await model._update(params, fields)
            return JSONResponse(1, result)
        },
        async getPage(params, query) {
            if (query && query['name']) {
              query = {name: {$regex: query['name'], $options:'i'}}
            }
            const result = await model._getPage({ condition: query, ...params })
            return JSONResponse(1, result)
        },
        async getById({ _id }) {
            const result = await model._findById(_id)
            return JSONResponse(1, result)
        },
        async login(params, query) {
            if (!params || !params['account'] || !params["password"]) {
                return JSONResponse(0, null, '请填写用户名与密码！')
            }
            const result = await model._find({ condition: params })
            if (result.length == 0) {
              return JSONResponse(0, null, '用户名或密码错误！')
            }
            this.session.currentUser = result[0]
            return JSONResponse(1, result[0])
        }
    }
}
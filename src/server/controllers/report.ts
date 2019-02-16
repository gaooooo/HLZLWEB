/**
 * report
 */
const { momentHelper } = appUtils.requireCommon()
import xlsx from 'node-xlsx'
import hospitalMap from './reportMap'

export default ({ debug, logger }) => {
    const model = DB.models.report
    return {
        async add(params, query, fields) {
            console.log('role', this.session.currentUser['role'])
            if (!this.session.currentUser || !this.session.currentUser['account'] || !this.session.currentUser['role']) {
              return JSONResponse(2, null, '登录超时！')
            }
            if (this.session.currentUser['role'] === 1) {
              return JSONResponse(0, null, '管理员不可以上传数据！')
            }
            fields.hospital_name = this.session.currentUser['name']
            fields.hospital_account = this.session.currentUser['account']
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
            let newQuery = {}
            if (query && query['name']) {
              newQuery = {hospital_name: {$regex: query['name'], $options: 'i'}}
            }
            if (query && query['start_date']) {
              Object.assign(newQuery, {updateTime: {$gte: query['start_date'], $lt: query['end_date']}})
            }
            if (!this.session.currentUser || !this.session.currentUser['account'] || !this.session.currentUser['role']) {
                return JSONResponse(2, null, '登录超时！')
            }
            if (this.session.currentUser['role'] === 2) {
                newQuery = Object.assign(newQuery, {hospital_account: this.session.currentUser['account']})
            }
            const result = await model._getPage({ sortBy: {state: 1, createTime: -1}, condition: newQuery, ...params })
            if (query && query['is_export'] && result['list']) {
                let totalArr = []
                let nameMapRow = {}
                let dataArr = []
                let titleArr = result.list.map((x, index) => {
                   for (let h in hospitalMap) {
                    if (hospitalMap.hasOwnProperty(h)){
                      !nameMapRow[h]  && (nameMapRow[h] = [])
                      // nameMapRow[h].push(x[h+'_desc'] ? x[h] + '备注：(' + x[h+'_desc'] + ')' : x[h])
                      // nameMapRow[h].push(x[h+'_desc'] ? x[h+'_desc']: x[h])
                      if (typeof x[h] === 'undefined') {
                        nameMapRow[h].push('')
                      } else {
                        nameMapRow[h].push(x[h] + (x[h + '_count'] && ',' + x[h + '_count'] || '') + (x[h + '_desc'] && ',' + x[h + '_desc'] || ''))
                      }
                    }
                   }
                   return x.hospital_name
                })
                titleArr.unshift('指标名称')
                totalArr.push(titleArr)

                for (let h in nameMapRow) {
                  let _temparr = []
                  if (nameMapRow.hasOwnProperty(h)){
                    _temparr.push(hospitalMap[h], ...nameMapRow[h])
                  }
                  totalArr.push(_temparr)
                }
                let fileName = momentHelper.format(new Date(), 'YYYYMMDDHHmmss') + '.xlsx'
                let _buffer = xlsx.build([{ name: 'sheet1', data: totalArr }])
                this.res.setHeader('Content-disposition', 'attachment;filename=' + fileName)
                this.body = _buffer
                return _buffer
            }
            return JSONResponse(1, result)
        },
        async getById({ _id }) {
            const result = await model._findById(_id)
            return JSONResponse(1, result)
        }
    }
}
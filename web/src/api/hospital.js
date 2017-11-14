import fetch from 'src/util/fetch'

export function add(model) {
  return fetch({
    url: '/api/hospital',
    method: 'post',
    data: model
  })
}

export function getPage(pageIndex, pageSize, queryString) {
  return fetch({
    url: `/api/hospital/page/${pageSize}/${pageIndex}`,
    method: 'get',
    params: queryString
  })
}

export function login(account, password) {
  return fetch({
    url: `/api/hospital/login/${account}/${password}`,
    method: 'get'
  })
}


export function del(ids) {
  let params = { 
    ids: ids
  }
  return fetch({
    url: '/api/hospital',
    method: 'delete',
    params: params
  })
}

export function update(_id, model) {
    return fetch({
      url: `/api/hospital/${_id}`,
      method: 'put',
      data: model
    })
  }
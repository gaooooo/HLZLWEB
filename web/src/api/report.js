import fetch from 'src/util/fetch'

export function add(model) {
  return fetch({
    url: '/api/report',
    method: 'post',
    data: model
  })
}

export function getPage(pageIndex, pageSize, queryString) {
  return fetch({
    url: `/api/report/page/${pageSize}/${pageIndex}`,
    method: 'get',
    params: queryString
  })
}

export function del(ids) {
  let params = { 
    ids: ids
  }
  return fetch({
    url: '/api/report',
    method: 'delete',
    params: params
  })
}

export function update(_id, model) {
    return fetch({
      url: `/api/report/${_id}`,
      method: 'put',
      data: model
    })
  }

    /**
   * 用于下载文件
   * @param url
   * @param name
   */
  export function  download (url, name = '') {
    url = '/api' + url
    let link = document.createElement('a')
    link.setAttribute('download', name)
    link.setAttribute('href', url)
    Object.assign(link.style, {
      opacity: 0,
      position: 'absolute',
      top: 0
    })
    document.body.appendChild(link)
    link.click()
    setTimeout(() => document.body.removeChild(link), 2000)
  }
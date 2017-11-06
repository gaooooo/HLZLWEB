import fetch from 'src/util/fetch'

export function reportFetch(username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function report() {
  return fetch({
    url: '/demo/test/a',
    method: 'post'
  })
}

export function testFetch(token) {
  return fetch({
    url: '/api/demo/test/a',
    method: 'get',
    params: { token }
  })
}
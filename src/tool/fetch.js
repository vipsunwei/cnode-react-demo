export const fetchGetUrl = function (url, params) {
  if (params) {
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return url
}
/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
const obj2String = function (obj, arr = [], idx = 0) {
  for (let item in obj) {
    arr[idx++] = [item, obj[item]]
  }
  return new URLSearchParams(arr).toString()
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */
const commonFetch = function (url, options, method = 'GET') {
  const searchStr = obj2String(options)
  let initObj = {}
  if (method === 'GET') { // 如果是GET请求，拼接url
    url += '?' + searchStr
    initObj = {
      // credentials: 'include',
      method: method
    }
  } else {
    initObj = {
      method: method,
      // credentials: 'include',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: searchStr
    }
  }
  return fetch(url, initObj)
}

/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */
export const fetchGet = function (url, options) {
  return commonFetch(url, options, 'GET')
}

/**
 * POST请求
 * @param url 请求地址
 * @param options 请求参数
 */
export const fetchPost = function (url, options) {
  return commonFetch(url, options, 'POST')
}

import axios from 'axios'

const request = axios.create({
  timeout: 5000,
})
// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8'

    // config.headers['token'] = user.token;  // 设置请求头
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  (response) => {
    let res = response.data
    // 如果是返回的文件
    if (response.config.responseType === 'blob') {
      return res
    }
    else{
      res = JSON.stringify(res)
      res = res.replace("\"","").replace("\"","")
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default request

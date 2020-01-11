import axios from 'axios'

// export function request (config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://192.168.0.109:8080/',
//     timeout: 5000
//   })
//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// export function request (config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://192.168.0.109:8080',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

export function request (config) {
  const instance = axios.create({
    // baseURL: 'http://api.klgj.top'//线上接口
    // baseURL: 'http://47.89.250.139:8888'//线上接口
    baseURL: 'http://47.105.185.81:8899'//线上接口
    // baseURL: 'http://192.168.0.111:8082'//本地接口
    // baseURL: 'http://127.0.0.1:8899'
    // baseURL: '/api'

    // timeout: 5000
  })
  // 发送真正的网络请求
  return instance(config)
}

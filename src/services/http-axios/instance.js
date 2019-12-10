
import 'axios'
// 创建一个 axios 实例
const service = axios.create({
    withCredentials: false, // 允许携带cookie
    baseURL: process.env.VUE_APP_API,
    timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
      if (config.method === "get") {
        // config.params = filterNull(config.params || {});
        // config.params.sessionId = token;
        // config.params.carry = md5(queryToString(config.params) + "mal#b@fI");
      } else {
        // config.data = filterNull(config.data || {});
        // config.data.sessionId = token;
        // config.data.carry = md5(queryToString(config.data) + "mal#b@fI");
      }
      return config;
    },
    error => {
      // 发送失败
      console.error("axios send error", error);
      return Promise.reject(error);
    }
  );
  
  // 响应拦截器
  service.interceptors.response.use(
    response => {
      // dataAxios 是 axios 返回数据中的 data
      const dataAxios = response.data;
      // 这个状态码是和后端约定的
      return dataAxios;
    },
    error => {
      if (error && error.response) {
        
      }
      return Promise.reject(error);
    }
  );

export default service;

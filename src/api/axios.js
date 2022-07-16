import axios from "axios";
import config from "./config";
const $request = (options) => {
  return new Promise((resolve, reject) => {
    const axiosInstance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials
    });

    /**
     * 请求拦截器
     */
    axiosInstance.interceptors.request.use(
      (config) => {
        // 添加 icode
        config.headers.icode = "8DD6346A082B996D";
        // 必须返回 config
        return config;
      },
      (error) => Promise.reject(error)
    );

    /**
     * 响应拦截器
     */
    axios.interceptors.response.use(
      (response) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );

    axiosInstance(options)
      .then((res) => resolve(res))
      .catch((err) => {
        console.warn(err);
        reject(err);
      });
  });
};
export default $request;

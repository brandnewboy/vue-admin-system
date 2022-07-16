const config = {
  method: "get",
  // 基础url前缀
  baseUrl: process.env.VUE_APP_BASE_API,
  // 请求头信息
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 300 * 1000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: "json",
  icode: "8DD6346A082B996D"
};

export default config;

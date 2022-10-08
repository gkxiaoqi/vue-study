import { ElMessage } from "element-plus";
import axios from "axios";
import EventEmitter from "events";

class Request extends EventEmitter {
  constructor() {
    super();
    this.interceptors();
  }

  interceptors() {
    // 请求拦截器
    axios.interceptors.request.use(
      // 发送请求之前
      (config) => {
        // 头部设置签名
        config.headers.sign = "";
        config.headers.token = "";

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    axios.interceptors.response.use(
      (response) => {
        const code = response.status;
        if ((code >= 200 && code < 300) || code === 304) {
          const res = response.data;
          this.emit("Success", res);
          return Promise.resolve(res);
        } else {
          console.log(request);
          this.emit("Error", response);
          return Promise.reject(response);
        }
      },
      (error) => {
        console.log("error");
        this.emit("Error");
        return Promise.reject(error);
      }
    );
  }

  get(url, params) {
    return axios({
      method: "get",
      url,
      params,
    });
  }

  post(url, data) {
    return axios({
      method: "post",
      url,
      data,
    });
  }

  delete(url, data) {
    return axios({
      method: "delete",
      url,
      data,
    });
  }

  put(url, data) {
    return axios({
      method: "put",
      url,
      data,
    });
  }

  patch(url, data) {
    return axios({
      method: "patch",
      url,
      data,
    });
  }
}

const DialogMessage = (message) => {
  if (!message) {
    console.error("empty message");
    return;
  }
  ElMessage.error(message);
};

let request = new Request();
request.on("Success", function (data) {
  console.log("Success: ", data);
});
request.on("Error", function (data) {
  console.log("Error: ", data);
});

export default request;

import request from "@/utils/http/request";

export const getDemo = (params) => {
  let url = "http://jsonplaceholder.typicode.com/comments";
  return request.get(url, params);
};

export const getUser = (params) => {
  let url = "https://jsonplaceholder.typicode.com/users/1";
  return request.get(url, params);
};

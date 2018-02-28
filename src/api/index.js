/*
 * @Author: zhudongyu
 * @Date: 2018-02-27 14:23:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-28 15:58:52
 * 
 * 
 * des:
 *      1.该文件为前后端分离核心文件
 *      2.为axios做了统一配置（拦截器，method封装，头信息....）
 *      3.项目的所有请求全都放在这里，等项目上线后只需要更改下URL
 *
 */

// 全局配置axios
import axios from 'axios'

axios.defaults.baseURL = '';
axios.defaults.timeout = 5000;

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {   
        // Do something with response data
        console.log("res interceptors come on !");
        console.log(response)
        return response
    }, 
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);
// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
); 

// 请求method 封装 
// 1.减少重复代码量
// 2.catch做统一处理
const GET = function (url,params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params:params})
        .then( response => { resolve(response.data) })
        .catch( err => { console.log("this response has some errors ... ") })
    })
};
const POST = function (url,data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then( response => {resolve(response.data) })
        .catch(err => { console.log("error") })
    })
}

// axios.all
// axios#request(config)
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#options(url[, config])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])


export default {
    getProducts (options) {
        console.log("this is api index.js")
        return GET("../../static/all-products.json")
    }
    
}



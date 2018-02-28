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
export default {
    get (url,params) {
        return new Promise((resolve, reject) => {
          axios.get(url, {params:params})
            .then( response => { resolve(response.data) })
            .catch( err => { console.log("this response has some errors ... ") })
        })
    },
    post (url,data) {
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

}


// axios 挂载
// Vue.prototype.axios = axios;
// Vue.prototype.$api = api;


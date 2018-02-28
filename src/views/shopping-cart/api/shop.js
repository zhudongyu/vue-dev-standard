// import Axios from "../../../axiosHttp.js";
import API from "../../../api/index";

export default {
  getProducts (cb) { // cb：callback
    // Axios.get("../../../../static/all-products.json")
    //   .then( data => cb(data) )   
    API.getProducts().then(data => cb(data))
  },


  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}

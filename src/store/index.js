import Vue from 'vue'
import Vuex from 'vuex'

// logger
// import createLogger from '../plugins/logger'
// global store from vuex
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


// shopping-cart
import ProductList from '../views/shopping-cart/store/ProductList'
import ShoppingCart from '../views/shopping-cart/store/ShoppingCart'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules : {
        ProductList,
        ShoppingCart
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})







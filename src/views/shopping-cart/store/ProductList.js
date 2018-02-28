import shop from '../api/shop' // 引入api文件夹中的shop

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all // state在这里就有了
}

// mutations
const mutations = {
  receive_products (state, { products }) {
    state.all = products // 把得到的products的数据传入到state.all
  },
  add_to_cart (state, { id }) {
    // 添加到购物车，这里把数量减一
    state.all.find(product => product.id === id).inventory--
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) { // 默认进来获取数据，然后渲染数据
    shop.getProducts(products => {
      commit("receive_products", { products })
    })
  },
  addToCart ({ commit }, product) {
    if (product.inventory > 0) { // 如果数量大于0
      commit("add_to_cart", { id: product.id })
    } else {
      console.log("商品卖完了");
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

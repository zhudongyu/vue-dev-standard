import shop from '../api/shop'


// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  cartProducts: (state, getters, rootState) => {
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// mutations
const mutations = {
  add_to_cart (state, { id }) {
    state.checkoutStatus = null
    const record = state.added.find(product => product.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  set_cart_items (state, { items }) {
    state.added = items
  },
  set_checkout_status (state, status) {
    state.checkoutStatus = status
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit("set_checkout_status", null)
    // empty cart
    commit("set_cart_items", { items: [] })
    shop.buyProducts(
      products,
      () => commit("set_checkout_status", 'successful'),
      () => {
        commit("set_checkout_status", 'failed')
        // rollback to the cart saved before sending the request
        commit("set_cart_items", { items: savedCartItems })
      }
    )
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

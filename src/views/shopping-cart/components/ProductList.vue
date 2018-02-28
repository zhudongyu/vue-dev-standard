<template>
  <ul>
    <li v-for="(product,index) in products" :key="index">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({ // 获取数据的
    products: 'allProducts'
  }),
  methods: mapActions([ // 管理事件
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts') // dispatch => actions
  }
}
</script>

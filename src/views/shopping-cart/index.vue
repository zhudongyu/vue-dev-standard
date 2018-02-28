<template>
  <div id="shoppingExample">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList></ProductList>
    <hr>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>
// 引入组件
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

export default {
  // 注册组件
  components: { ProductList, ShoppingCart },
  created () {
    console.log("this component is created after router.after")
  },
  beforeRouteEnter (to, from, next) {
    console.log("beforRouterEnter")
    // console.log("to");    
    // console.log(to);
    // console.log(from);
    next(vm => {
      console.log(vm);
    })  
  },
  beforeRouteUpdate (to, from, next) {
    console.log("beforRouterUpdate")    
    // this.studentId = to.params.studentId
    // console.log(this.studentId)
    next()
  },
  beforeRouteLeave (to, from , next) {
    console.log("beforRouterLeave")    
    // console.log(to);
    // console.log(from);
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>


<style lang="scss" scoped>
#shoppingExample {
    border: 2px solid black;
}
</style>




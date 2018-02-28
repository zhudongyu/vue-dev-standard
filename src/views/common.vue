<template>
  <div>
      <dy-header></dy-header>
      <router-view></router-view>
      <dy-footer></dy-footer>
  </div>
</template>
<script>
import dyHeader from '../components/header.vue'
import dyFooter from '../components/footer.vue'

export default {
    name : 'common',
    components: {
        dyHeader,
        dyFooter
    }
}
</script>
<style lang="scss" scoped>

</style>


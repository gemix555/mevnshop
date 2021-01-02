<template>
  <div id="app" class="container">
    <Header :categories="categories" :cartCount="cartCount"/>
    <router-view/>
  </div>
 </template>
<script>
 import Header from '@/components/layouts/Header'
 import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Header
  },
 mounted() {
   this.fetchCategories()
 },
  computed: {
    ...mapGetters({
      categories: 'categories',
      cartCount: 'cartCount'
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories'
    })
  }
}
</script>

}
<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

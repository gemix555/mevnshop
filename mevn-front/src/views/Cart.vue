<template>
  <div class="col-12">
    <template v-if="cartItems" >

        <div class="col-6 offset-4"
            v-for="(item, key) in cartItems"
            :key="key"
        >
          <div class="card mb-3" style="max-width: 340px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img :src="item.imageUrl" class="card-img" :alt="item.title">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{item.title}} - {{item.price}}$</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div class="center">
        Quantity: {{cartCount}}
        Total: {{cartTotalPrice}}
      </div>
    </template>
    <template v-else>
      <img
          class="empty-image"
          src="https://www.pngitem.com/pimgs/b/480-4803650_cart-icon-png.png"
          alt="Cart empty"
      >
      <hr>
      You Cart is empty
    </template>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "Cart",
  computed: {
  ...mapGetters({
    cartTotalPrice: 'cartTotalPrice',
    cartItems: 'cartItems',
    cartCount: 'cartCount'
  })
  }
}
</script>

<style scoped>

</style>
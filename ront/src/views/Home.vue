<template>
  <div class="row">
    <div class="col-4"
        v-for="(product, key) in products"
        :key="key"
    >
      <ProductCard
          :title="product.title"
          :price="product.price"
          :description="trimText(product.description)"
          :imageUrl="product.imageUrl"
          @add-to-cart="addToCart(product)"
          :inCart="cartItemsIds.includes(product._id)"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import ProductCard from "@/components/ProductCard";
export default {
  name: 'Home',
  components: {
    ProductCard
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      products: 'products',
      cartItems: 'cartItems'
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({_id}) => _id)
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
    ...mapMutations({
      addToCart: 'addToCart'
    }),
    trimText(text) {
      const symbolsCount = 150
      return text.length > symbolsCount
          ? text.slice(0, symbolsCount - 3) + '...'
          : text;
    }
  },

}
</script>

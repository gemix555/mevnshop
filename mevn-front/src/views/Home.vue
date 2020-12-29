<template>
  <div class="row">
    <h2>Home</h2>
    <div
        v-for="(product, key) in products"
        :key="key"
        class="col-lg-4 col-md-6 mb-4"
    >
      <ProductCard
          :title="product.title"
          :price="product.price"
          :imageUrl="product.imageUrl"
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
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    })
  },
}
</script>

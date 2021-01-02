<template>
  <div class="">
    <div class="card" style="width: 18rem;">
      <img :src="imageUrl" class="card-img-top" :alt="title">
      <div class="card-body">
        <p class="card-text">{{description}}</p>
      </div>
      <div class="button">
        <button class="btn btn-info"
                @click="$emit('addToCart')"
                v-if="!inCart"
        >
          Добавить в корзину
        </button>
        <button class="btn btn-danger"
                @click="$emit('addToCart')"
                v-else
        >
          Удалить из корзины
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: null,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    inCart: {
      type: Boolean,
      default: false,
    }
  },
}
</script>


<style scoped lang="scss">

</style>
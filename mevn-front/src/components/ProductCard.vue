<template>
  <div class="card">
    <div class="card_header">
      {{title}} - {{price}}$
    </div>
    <div class="banner" :style="`background-image: url(${imageUrl})`">
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
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>


<style scoped lang="scss">
  .card {
    width: 340px;
    height: 200px;
    padding: 20px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 12px;
    .banner {
      width: 100%;
      height: 80%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    &_footer {
      margin-top: 10px;

    }
  }
</style>
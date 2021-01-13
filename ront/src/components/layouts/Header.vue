<template>
  <header class="header row ">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" tag="a">Logo</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active " v-for="({id, title}, key) in categories"
              :key="key">
            <router-link class="nav-link" tag="a" :to="`/${id}`">{{title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="">
        <router-link to="/cart" tag="a">
          Cart {{cartCount}}
        </router-link>
      </div>
    </nav>
<!--      <ul class="nav">-->
<!--        <li class="nav_link"-->
<!--            v-for="({id, title}, key) in categories"-->
<!--            :key="key"-->
<!--        >-->
<!--          <router-link tag="a" :to="`/${id}`">{{title}}</router-link>-->
<!--        </li>-->
<!--      </ul>-->
  </header>
</template>

<script>
export default {
name: "Header",
  props: {
  categories: {
    type: Array,
    default: () => []
  },
    cartCount: {
    type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .nav {
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    width: 100%;
    padding-inline-start: 0;
    &_link {
      margin-right: 10px;
      a {
        cursor: pointer;
        text-decoration: none;
        color: black;
        &:hover {
          color: olive;

        }
      }
    }
  }

</style>
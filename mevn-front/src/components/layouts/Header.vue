<template>
  <header class="header">
    <div class="header_left">
      Logo
    </div>
    <div class="header_right">
      <ul class="nav">
        <li class="nav_link"
            v-for="({id, title}, key) in categories"
            :key="key"
        >
          <router-link tag="a" :to="`/${id}`">{{title}}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
name: "Header",
  props: {
  categories: {
    type: Array,
    default: () => []
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
import { createStore } from 'vuex'
import product from './product'
import categories from './categories'
import cart from "@/store/cart";

export default createStore({
  modules: {
    product,
    categories,
    cart
  }
})

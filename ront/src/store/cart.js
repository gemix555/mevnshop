import {sum} from 'ramda'
import {getPaymentIntent} from '../services/payment.service'

const mutations = {
    addToCart(state, product) {
        const productInCart = state.cartItems.find(({_id} ) => product._id === _id)
        if(productInCart) {
            const currentProductsInCart = state.cartItems
            state.cartItems = currentProductsInCart.filter(({_id}) => product._id !== _id)
        }else {
            state.cartItems.push(product)
        }
    },
    setPaymentError(state, error) {
        state.paymentError = error
    },
    clearCart(state) {
        state.cartItems = []
    }
}
const actions = {
   async handleBuy({ getters, commit }, form) {
       try {
           console.log("Form:", form)
           const intent = await getPaymentIntent({
              amount: getters.cartTotalPrice,
               ...form
           })
       }catch (err) {
           commit('setPaymentError', err)
       }
    }
}

const getters = {
    cartTotalPrice: ({cartItems}) => sum(cartItems.map(item => item.price)),
    cartCount: ({cartItems}) => cartItems.length,
    cart: ({cart}) => cart,
    cartItems: ({cartItems}) => cartItems,
    paymentError: ({paymentError}) => paymentError
}
const state = () => ({
    cart: {
        total: 0
    },
    cartItems: [],
    paymentError: null
})

export default  {
    mutations,
    getters,
    actions,
    state
}
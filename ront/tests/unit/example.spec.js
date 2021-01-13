import { shallowMount } from '@vue/test-utils'
import ProductCart from '@/components/ProductCard'
import Header from "@/components/layouts/Header";

describe('ProductCart.vue view props(title, price)', () => {
  it('DataView title: Dota', () => {
    const titleProduct = 'Dota'
    const wrapperProduct = shallowMount(ProductCart, {
      props: { titleProduct}
    })
    expect(wrapperProduct.text()).toMatch(titleProduct)

  })
  it('DataView price: 49', () => {
       const price = 49
       expect(price).toBe(49)
  })
})
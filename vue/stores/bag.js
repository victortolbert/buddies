import { defineStore } from 'pinia'
import { useProductStore, Product } from './products'

export const useCartStore = defineStore({
  id: 'bag',

  state: () => ({
    contents: {},
  }),

  actions: {
    add(product) {
      if (this.contents[product.id]) {
        this.contents[product.id].quantity += 1
      } else {
        this.contents[product.id] = {
          productId: product.id,
          quantity: 1,
        }
      }
    },

    remove(product) {
      if (
        !this.contents[product.id] ||
        this.contents[product.id].quantity === 0
      ) {
        return
      }

      this.contents[product.id].quantity -= 1
    },
  },

  getters: {
    total() {
      const products = useProductStore()
      return Object.keys(this.contents).reduce((acc, id) => {
        return acc + products.all[id].cost * this.contents[id].quantity
      }, 0)
    },

    formattedCart() {
      const products = useProductStore()

      return Object.keys(this.contents).map((productId) => {
        const purchase = this.contents[productId]

        return {
          name: products.all[purchase.productId].name,
          quantity: purchase.quantity,
          cost: purchase.quantity * products.all[purchase.productId].cost,
        }
      })
    },
  },
})

import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'products',

  state: () => ({
    all: {},
    ids: [],
  }),

  getters: {
    list() {
      return this.ids.map((id) => this.all[id])
    },
  },

  actions: {
    async fetchAll() {
      const res = await window.fetch('http://localhost:7776/api/products')
      const data = await res.json()
      this.$state = data.reduce(
        (acc, curr) => {
          return {
            ids: acc.ids.concat(curr.id),
            all: { ...acc.all, [curr.id]: curr },
          }
        },
        { all: {}, ids: [] }
      )
    },
  },
})

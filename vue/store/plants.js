import plants from '~/data/plants'

export const state = () => ({
  list: plants,
  view: 'grid',
  selectedFilter: null
})

export const getters = {
  favoritePlants: state => {
    return state.list.filter(plant => plant.isFavorite)
  },
  filteredPlants: state => {
    if (state.selectedFilter === 'toxic') {
      return state.list.filter(
        (plant) => typeof plant.toxicity !== 'undefined'
      )
    } else if (state.selectedFilter === 'non-toxic') {
      return state.plants.filter(
        (plant) => typeof plant.toxicity === 'undefined'
      )
    }
    return state.list
  },
  toxicPlants: state => {
    return state.list.filter(
      (plant) => typeof plant.toxicity !== 'undefined'
    )
  },
  nonToxicPlants: state => {
    return state.plants.filter(
      (plant) => typeof plant.toxicity === 'undefined'
    )
  },
}

export const mutations = {
  SET_PLANTS: (state, plants) =>
  (state.list = plants.map(plant => {
    return {
      ...plant,
      isFavorite: false,
      isDeleted: false,
    }
  })),

  REMOVE_PLANT(state, plantId) {
    state.list = state.list.filter(plant => plant.id !== plantId)
  },

  SET_VIEW(state, view) {
    state.view = view
  },

  SET_FILTER(state, filter) {
    state.selectedFilter = filter
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios, $store }) {
    const plants = await $axios.$get(`plants`)

    commit('SET_PLANTS', plants)
  }
}

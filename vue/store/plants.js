import plants from '~/data/plants'

const filters = {
  all(plants) {
    return plants
  },
  toxic(plants) {
    return plants.filter(function (plant) {
      return plant.toxicity
    })
  },
  'non-toxic'(plants) {
    return plants.filter(function (plant) {
      return !plant.toxicity
    })
  },
  favorites(plants) {
    return plants.filter(function (plant) {
      return plant.isFavorite
    })
  },
}

export const state = () => ({
  list: plants,
  view: 'grid',
  selectedFilter: null,
  showFavorites: false,
  visibility: 'all'
})

export const getters = {
  favoritePlants: state => {
    return state.list.filter(plant => plant.isFavorite)
  },

  filteredPlants: state => {
    return filters[state.visibility](state.list)
  },

  toxicPlants: state => {
    return state.list.filter(
      (plant) => typeof plant.toxicity !== 'undefined'
    )
  },
  nonToxicPlants: state => {
    return state.list.filter(
      (plant) => typeof plant.toxicity === 'undefined'
    )
  },
  getPlantById: state => id => {
    return state.list.find(plant => plant.id === id)
  },
}

export const mutations = {
  SET_PLANTS: (state, plants) =>
  (state.list = plants.map(plant => {
    return {
      ...plant,
      isFavorite: false,
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
  },

  SET_VISIBILITY(state, visibility) {
    state.visibility = visibility
  },

  SET_FAVORITE: (state, payload) => {
    state.list = [
      ...state.list.filter(item => item.id !== payload.id),
      payload
    ]
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const plants = await $axios.$get('plants')

    commit('SET_PLANTS', plants)
  }
}

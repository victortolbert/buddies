import { useContext, reactive, watchEffect } from '@nuxtjs/composition-api';

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

export const usePlantApi = () => {
  const { $axios } = useContext()

  const state = reactive({
    query: '',
    isLoading: true,
    plants: [],
    view: 'grid',
    selectedFilter: null,
    showFavorites: false,
    visibility: 'all',
  });

  const filteredPlants = () => filters[state.visibility](state.plants)

  watchEffect(() => {
    const PLANT_API_URL = `https://api.victortolbert.com/plants/?q=${state.query}`;
    $axios.$get(PLANT_API_URL)
      .then(response => {
        state.plants = response
        state.isLoading = false
      })
  });

  return {
    state,
    filteredPlants
  }
};

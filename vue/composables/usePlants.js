import { useFetch, useContext, ref, watch, computed, reactive, toRefs, watchEffect } from '@nuxtjs/composition-api'

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


export default function usePlants() {
  const { $axios } = useContext()

  const state = reactive({
    plants: [],
    visibility: 'all',
    query: '',
    isLoading: true,
  })
  const { fetch, fetchState } = useFetch(async () => {
    state.plants = await $axios.$get(`plants?q=${state.query}`)
  })

  const filteredPlants = computed(() => {
    return filters[state.visibility](state.plants)
  })

  watch(state.visibility, (newValue, oldValue) => {
    console.log({ newValue, oldValue })

    console.log('The new counter value is: ' + state.visibility)
  })

  const setVisibility = (value) => {
    // now you'll have to access its value through the `value` property
    state.visibility = value;
    console.log(state.visibility)
  };

  return {
    ...toRefs(state),
    fetch,
    fetchState,
    filteredPlants,
    setVisibility
  }
}

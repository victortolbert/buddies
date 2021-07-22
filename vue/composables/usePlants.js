import { useContext, useFetch, provide, computed, watchEffect, ref } from '@nuxtjs/composition-api'

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

  const plants = ref([])
  const isLoading = ref(true)
  const visibility = ref('all')
  const query = ref('')

  const { fetch, fetchState } = useFetch(async () => {
    plants.value = await $axios.$get(`plants?q=${query.value}`)
  })

  const filteredPlants = computed(() => {
    return filters[visibility.value](plants.value)
  })

  provide('visibility', visibility)

  return {
    fetch,
    fetchState,
    plants,
    visibility,
    query,
    isLoading,
    filteredPlants
  }
}

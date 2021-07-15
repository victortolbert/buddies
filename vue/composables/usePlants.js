import { useFetch, useContext, ref, computed } from '@nuxtjs/composition-api'
import { strip } from '@/helpers'

export default function usePlants() {
  const { $axios, route } = useContext()

  const plants = ref([])
  const checked = ref([])
  const isCheckAll = ref(false)

  useFetch(async () => {
    plants.value = await $axios.$get('plants')
  })

  const filteredPlants = computed(() => {
    if (route.value.params.tag) {
      return plants.value.filter(plant => plant.tags.includes(route.value.params.tag))
    }
    return plants.value
  })

  const tags = computed(() =>
    plants.value
      .map(plant => plant.tags)
      .flat()
      .reduce((obj, tag) => {
        if (!obj[tag]) {
          obj[tag] = 0
        }
        obj[tag]++
        return obj
      }, {}),
  )

  function removePlant(index) {
    plants.value.splice(index, 1)
  }

  function removePlants() {
    plants.value = []
  }

  function markAllRead() {
    plants.value.forEach(plant => (plant.hasBeenRead = true))
  }

  function checkAll() {
    isCheckAll.value = !isCheckAll.value
    checked.value = []

    if (isCheckAll.value) {
      for (const key in plants.value) {
        checked.value.push(plants.value[key])
      }
    }
  }

  function updateCheckAll() {
    if (checked.value.length === plants.value.length) {
      isCheckAll.value = true
    } else {
      isCheckAll.value = false
    }
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }

  function truncate(str) {
    return `${strip(str).substr(0, 50)}...`
  }

  return {
    plants,
    checked,
    isCheckAll,
    tags,
    checkAll,
    updateCheckAll,
    truncate,
    formatDate,
    removePlant,
    removePlants,
    filteredPlants,
    markAllRead,
  }
}

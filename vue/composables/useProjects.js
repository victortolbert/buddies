import { useContext, useFetch, provide, computed, ref } from '@nuxtjs/composition-api'

const filters = {
  all(projects) {
    return projects
  },
  toxic(projects) {
    return projects.filter(function (project) {
      return project.toxicity
    })
  },
  'non-toxic'(projects) {
    return projects.filter(function (project) {
      return !project.toxicity
    })
  },
  favorites(projects) {
    return projects.filter(function (project) {
      return project.isFavorite
    })
  },
}

export default function useProjects() {
  const { $axios } = useContext()

  const projects = ref([])
  const isLoading = ref(true)
  const visibility = ref('all')
  const query = ref('')

  const { fetch, fetchState } = useFetch(async () => {
    projects.value = await $axios.$get(`projects`)
  })

  const filteredProjects = computed(() => {
    return filters[visibility.value](projects.value)
  })

  provide('visibility', visibility)

  return {
    fetch,
    fetchState,
    projects,
    visibility,
    query,
    isLoading,
    filteredProjects
  }
}

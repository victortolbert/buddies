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
      return project.isCompleted
    })
  },
}

export const state = () => ({
  isLoading: false,
  list: [],
  selectedFilter: null,
  showCompleted: false,
  view: 'grid',
  visibility: 'all',
})

export const getters = {
  favoriteProjects: state => {
    return state.list.filter(project => project.isCompleted)
  },

  filteredProjects: state => {
    return filters[state.visibility](state.list)
  },

  toxicProjects: state => {
    return state.list.filter(
      (project) => typeof project.toxicity !== 'undefined'
    )
  },
  nonToxicProjects: state => {
    return state.list.filter(
      (project) => typeof project.toxicity === 'undefined'
    )
  },
  getProjectById: state => id => {
    return state.list.find(project => project.id === id)
  },
}

export const mutations = {
  SET_PROJECTS: (state, projects) =>
  (state.list = projects.map(project => {
    return {
      ...project,
      isCompleted: false,
    }
  })),

  REMOVE_PROJECT(state, projectId) {
    state.list = state.list.filter(project => project.id !== projectId)
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

  SET_COMPLETED: (state, payload) => {
    state.list = [
      ...state.list.filter(item => item.id !== payload.id),
      payload
    ]
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const projects = await $axios.$get('projects')

    commit('SET_PROJECTS', projects)
  },

  initProjects({ commit }, projects) {
    console.log('init...', projects);


    commit('SET_PROJECTS', projects)
  },
  async fetchProjects({ commit }, search) {
    const { data } = await this.$axios.get(
      `projects/?q=${encodeURIComponent(search)}&_limit=${this.limit}`
    )
    const projects = data.map((project) => {
      return {
        ...project,
        isCompleted: false,
      }
    })
    commit('SET_PROJECTS', projects)
  }
}

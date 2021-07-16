import axios from 'axios'
import { defineStore } from 'pinia'
import { useAxios } from '@vueuse/integrations'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a, p) {
  if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
  if (p === 'ed') return Promise.resolve({ isAdmin: false })
  return Promise.reject(new Error('invalid credentials'))
}

export const useMainStore = defineStore({
  id: 'main',

  state() {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
      theme: 'ema',
      advocate: {
        menuOptions: [
          { label: 'Application' },
          { label: 'ACE Assessment' },
          { label: 'Action Plan' },
          { label: 'CESD' },
          { label: 'Self Referral' },
          { label: 'Weekly Tasks' },
        ],
      },
      people: {
        menuOptions: [
          { label: 'Advocates' },
          { label: 'Volunteers' },
          { label: 'Families' },
          { label: 'Communities' },
          { label: 'Regions' },
          { label: 'People Map' },
        ],
      },
      accounts: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/vicknice',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/vicknice',
        },
        {
          name: 'YouTube',
          url: 'https://www.youtube.com/channel/UC0cNqew5aUOzYB5XmmkriWw',
        },
        {
          name: 'Twitch',
          url: 'https://www.twitch.tv/bencodezen',
        },
        {
          name: 'GitHub',
          url: 'https://www.github.com/vicknice',
        },
      ],
    }
  },

  getters: {
    doubleCount() {
      return this.counter * 2
    },
    doubleCountPlusOne() {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
    /** @type {boolean} */
    isAdmin: true,
    affiliate: {
      id: 1,
      pages: ['resume'],
      affiliate_name: 'Ga SPS',
      name: 'ga-sps',
      subdomain: '',
      theme: {
        nav: {
          class: 'bg-white text-gray-800',
        },
        logo_path: '',
        colors: {
          primary: 'paprika',
          secondary: '',
          tertiary: '',
          danger: '',
          warning: '',
          success: '',
          info: '',
        },
      },
      menuOptions: [
        { label: 'Affiliates' },
        { label: 'Regions' },
        { label: 'Staff' },
        { label: 'Agencies' },
        { label: 'Churches' },
        { label: 'Reports' },
        { label: 'Import Data' },
      ],
    },
  }),
  actions: {
    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user, password) {
      const userData = await apiLogin(user, password)

      this.$patch({
        name: user,
        ...userData,
      })
    },
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    },
  },
})

export const useTodoStore = defineStore({
  id: 'todos',
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos() {
      // autocompletion! ✨
      return this.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos() {
      return this.todos.filter((todo) => !todo.isFinished)
    },
    filteredTodos() {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})

export const useCart = defineStore({
  id: 'cart',

  actions: {
    purchase() {
      const user = useUserStore()
      if (!user.isAuthenticated()) {
        $nuxt.redirect('/login')
      }
    },
  },
})

export const useMovieStore = defineStore({
  id: 'movies',
  state() {
    return {
      movies: [{ id: 1, title: 'Movie 1' }],
    }
  },

  getters: {
    favoriteMovies() {
      return this.movies.filter(
        (movie) => movie.isFavorite || movie.vote_average >= 7
      )
    },
    filteredMovies() {
      if (this.filter === 'favorites') {
        return this.favoriteMovies
      } else if (this.filter === 'watched') {
        return this.watchedMovies
      }
      return this.movies
    },
  },

  actions: {
    removeMovie(movieId) {
      this.movies = this.movies.filter((movie) => movie.id !== movieId)
    },
    async fetchMovies() {
      const { data, finished } = await useAxios(
        `/movie/top_rated?api_key=b9cd5a762895c83f26b6b01835fa9f08`,
        instance
      )
      return {
        data,
        finished,
      }
    },
  },
})

export const useAdvocateStore = defineStore({
  id: 'advocate',

  state() {
    return {
      advocate: {
        menuOptions: [
          {
            id: 40,
            name: 'advocates-application',
            label: $nuxt.$t('advocate_application'),
          },
          {
            id: 40,
            name: 'advocates-ace-assessment',
            label: $nuxt.$t('ace_assessment'),
          },
          {
            id: 40,
            name: 'advocates-action-plan',
            label: $nuxt.$t('action_plan'),
          },
          { id: 40, name: 'advocates-cesd', label: $nuxt.$t('cesd') },
          {
            id: 40,
            name: 'advocates-self-referral',
            label: $nuxt.$t('self_referral'),
          },
          {
            id: 40,
            name: 'advocates-weekly-tasks',
            label: $nuxt.$t('weekly_tasks'),
          },
        ],
      },
    }
  },
})

export const useAffiliateStore = defineStore({
  id: 'affiliate',
  state() {
    return {
      affiliate: {
        id: 1,
        pages: ['resume'],
        affiliate_name: 'promise-serves',
        name: 'promise-serves',
        subdomain: 'promise-serves',
        theme: {
          nav: {
            class: 'bg-white text-gray-800',
          },
          logo_path: '',
          colors: {
            primary: 'paprika',
            secondary: '',
            tertiary: '',
            danger: '',
            warning: '',
            success: '',
            info: '',
          },
        },
        menuOptions: [
          { label: 'Affiliates' },
          { label: 'Regions' },
          { label: 'Staff' },
          { label: 'Agencies' },
          { label: 'Churches' },
          { label: 'Reports' },
          { label: 'Import' },
        ],
      },
    }
  },
})

export const usePeopleStore = defineStore({
  id: 'people',
  state() {
    return {
      person: {
        id: 1,
        pages: ['resume'],
        affiliate_name: 'Ga SPS',
        name: 'ga-sps',
        subdomain: '',
        theme: {
          nav: {
            class: 'bg-white text-gray-800',
          },
          logo_path: '',
          colors: {
            primary: 'paprika',
            secondary: '',
            tertiary: '',
            danger: '',
            warning: '',
            success: '',
            info: '',
          },
        },
        menuOptions: [
          { label: 'Affiliates' },
          { label: 'Regions' },
          { label: 'Staff' },
          { label: 'Agencies' },
          { label: 'Churches' },
          { label: 'Reports' },
          { label: 'Import Data' },
        ],
      },
      people: {
        menuOptions: [
          { label: 'Advocates' },
          { label: 'Volunteers' },
          { label: 'Families' },
          { label: 'Communities' },
          { label: 'Regions' },
          { label: 'Map' },
        ],
      },
    }
  },

  getters: {
    favoriteMovies() {
      return this.movies.filter(
        (movie) => movie.isFavorite || movie.vote_average >= 7
      )
    },
    filteredPeople() {
      if (this.filter === 'favorites') {
        return this.favoriteMovies
      } else if (this.filter === 'watched') {
        return this.watchedMovies
      }
      return this.movies
    },
  },

  actions: {
    removePerson(movieId) {
      this.people = this.people.filter((person) => person.id !== personId)
    },
    async fetchPeople() {
      const { data, finished } = await useAxios('/people', instance)
      return {
        data,
        finished,
      }
    },
  },
})

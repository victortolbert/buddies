import Vue from 'vue'
import groupBy from 'lodash.groupby'

export const state = () => ({
  categories: {},
  releases: [],
  currentArticle: null,
  user: {
  },
  pages: {
    home: { name: 'Home', icon: 'home' },
    dashboard: { name: 'Dashboard', icon: 'template' },
    projects: { name: 'Projects', icon: 'collection' },
    calendar: { name: 'Calendar', icon: 'calendar' },
    customer: { name: 'Customers', icon: 'office-building' },
    billing: { name: 'Billing', icon: 'credit-card' },
    reports: { name: 'Reports', icon: 'document-report' },
    settings: { name: 'Settings', icon: 'cog' },
  },
  quotes: [
    {
      id: 1,
      text: 'A goal should scare you a little and excite you a lot.',
      attribution: 'Joe Vitale',
    },
    {
      id: 2,
      text: 'There is a destiny that makes us brothers; none goes his way alone. What we put into the lives of others, comes back into our own.',
      attribution: 'Edwin Markham',
    },
    {
      id: 3,
      text: 'Simplicity is the ultimate sophistication',
      attribution: 'Leonardo da Vinci',
      created_at: '',
      source: {
        title:
          'Presentation Zen: Simple Ideas on Presentation Design and Delivery',
        author: 'Gar Reynolds',
      },
    },
    {
      id: 4,
      text: 'Invention requires a long term willingness to be misunderstood',
      attribution: 'Jeff Bezos',
      created_at: '',
      source: {
        title: '',
        author: '',
        url: '',
      },
    },
  ],
})


export const getters = {
}

export const actions = {
  async fetchCategories({ commit, state }) {
    // Avoid re-fetching in production
    if (process.dev === false && state.categories[this.$i18n.locale]) {
      return
    }
    const docs = await this.$content(this.$i18n.locale).only(['category', 'title', 'slug']).sortBy('position', 'asc').fetch()
    docs.push({ slug: 'releases', title: 'Releases', category: 'Community' })
    const categories = groupBy(docs, 'category')

    commit('SET_CATEGORIES', categories)
  },
  async fetchReleases({ commit }) {
    const options = {}
    if (process.env.GITHUB_TOKEN) {
      options.headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    }
    let releases
    try {
      const data = await fetch('https://api.github.com/repos/nuxt/content/releases', options).then(res => res.json())
      releases = data.filter(r => !r.draft).map((release) => {
        return {
          name: release.name || release.tag_name,
          date: release.published_at,
          body: this.$markdown(release.body)
        }
      })
    } catch (e) {
    }

    const getMajorVersion = r => r.name && Number(r.name.substring(1, 2))
    releases.sort((a, b) => {
      const aMajorVersion = getMajorVersion(a)
      const bMajorVersion = getMajorVersion(b)
      if (aMajorVersion !== bMajorVersion) {
        return bMajorVersion - aMajorVersion
      }
      return new Date(b.date) - new Date(a.date)
    })

    commit('SET_RELEASES', releases)
  }
}

export const mutations = {
  SET_CURRENT_ARTICLE(state, article) {
    state.currentArticle = article
  },
  SET_CATEGORIES(state, categories) {
    // Vue Reactivity rules since we add a nested object
    Vue.set(state.categories, this.$i18n.locale, categories)
  },
  SET_RELEASES(state, releases) {
    state.releases = releases
  }
}

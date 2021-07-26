export const state = () => ({
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
}

export const mutations = {
  SET_CURRENT_ARTICLE(state, article) {
    state.currentArticle = article
  },
}

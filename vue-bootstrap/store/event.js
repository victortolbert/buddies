import { addDays } from 'date-fns'

const getEventIndexById = (state, eventId) =>
  state.events.findIndex(event => event.id.toString() === eventId.toString())

export const state = () => ({
  weekendsVisible: false,
  events: [
    {
      id: 10,
      title: 'Gratitude, Wisdom, Care, Courage, Grit, Celebration',
      date: new Date(),
      allDay: true,
    },
    {
      id: 20,
      title: 'Backlog Grooming/Story Time',
      start: addDays(new Date(), 1),
    },
    { id: 30, title: 'Sprint Planning', start: addDays(new Date(), 2) },
    { id: 40, title: 'Release day', date: '2021-01-30' },
    { id: 50, title: 'The Future of Frontend', date: '2021-02-05' },
  ],
})


export const getters = {
  events: state => state.events,
  weekendsVisible: state => state.weekendsVisible,
}

export const actions = {
  createEvent: ({ commit }, event) => {
    commit('CREATE_EVENT', event)
  },

  updateEvent: ({ commit }, updatedEvent) => {
    commit('UPDATE_EVENT', updatedEvent)
  },

  deleteEvent: ({ commit }, eventId) => {
    commit('DELETE_EVENT', eventId)
  },

  setweekendsVisible: ({ commit }, enabled) => {
    commit('SET_WEEKENDS_ENABLED', enabled)
  },
}

export const mutations = {
  CREATE_EVENT(state, event) {
    return state.events.push(event)
  },

  UPDATE_EVENT(state, updatedEvent) {
    const index = getEventIndexById(state, updatedEvent.id)

    if (index === -1) {
      // eslint-disable-next-line
      return console.warn(`Unable to update event (id ${updatedEvent.id})`)
    }

    return state.events.splice(index, 1, {
      ...state.events[index],
      title: updatedEvent.title,
      start: updatedEvent.start,
      end: updatedEvent.end,
      date: updatedEvent.date,
    })
  },

  DELETE_EVENT(state, eventId) {
    const index = getEventIndexById(state, eventId)

    if (index === -1) {
      // eslint-disable-next-line
      return console.warn(`Unable to delete event (id ${eventId})`)
    }

    return state.events.splice(index, 1)
  },

  SET_WEEKENDS_ENABLED(state, enabled) {
    state.weekendsVisible = enabled
  },
}

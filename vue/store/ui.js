export const state = () => ({
  overlayIsOpen: false,
  activeView: 'list'
})

export const mutations = {
  CLOSE_OVERLAY(state) {
    state.overlayIsOpen = false
  },

  OPEN_OVERLAY(state) {
    state.overlayIsOpen = true
  },

  SET_ACTIVE_VIEW(state, payload) {
    state.activeView = payload
  },
}

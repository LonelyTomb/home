export const state = () => ({
  toastMessage: ''
})
export const mutations = {
  resetToast(state) {
    state.toastMessage = ''
  },
  changeToast(state, message) {
    state.toastMessage = message
  }
}
export const getters = {
  getToastMessage: (state) => (message) => {
    return state.toastMessage
  }
}
export const actions = {
  async hideToast({ commit }) {
    await commit('resetToast')
  },
  async showToast({ commit }, message) {
    await commit('changeToast', message)
  },
  nuxtServerInit({ commit }, { req }) {}
}

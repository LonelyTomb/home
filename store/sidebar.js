export const state = () => ({
  sidebar: false
})
export const mutations = {
  changeSidebar(state) {
    state.sidebar = !state.sidebar
  }
}
export const getters = {
  getSidebarState(state) {
    return state.sidebar
  }
}
export const actions = {
  async toggleSidebar({ commit }) {
    await commit('changeSidebar')
  }
}

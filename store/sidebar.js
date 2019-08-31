export const state = () => ({
  sidebar: false
})
export const mutations = {
  changeSidebar(state, value) {
    state.sidebar = value === 'reset' ? false : !state.sidebar
  }
}
export const getters = {
  getSidebarState(state) {
    return state.sidebar
  }
}
export const actions = {
  async toggleSidebar({ commit }, value = '') {
    await commit('changeSidebar', value)
  }
}

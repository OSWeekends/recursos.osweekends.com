import authService from '../../Services/auth.service'

const getters = {
  getUser: state => state.user,
  isLogged: state => {
    return (state.user !== null)
  }
}

const actions = {
  logIn: async ({ commit }) => {
    try {
      let user = await authService.login()
      commit('logIn', user)
    } catch (error) {
      console.error(error)
    }
  },
  logOut: async ({commit}) => {
    try {
      await authService.logout()
      commit('logOut')
    } catch (error) {
      console.error(error)
    }
  },
  checkLogged: async ({commit, dispatch}) => {
    dispatch('startSpinner')
    try {
      let user = await authService.getCurrentUser()
      if (user) commit('logIn', user)
    } catch (error) {
      console.error(error.message)
    } finally {
      dispatch('stopSpinner')
    }
  }
}

const mutations = {
  logIn: (state, user) => {
    state.user = user
  },
  logOut: (state) => {
    state.user = null
  }
}

export default {
  state () {
    return {
      user: null
    }
  },
  getters,
  actions,
  mutations
}

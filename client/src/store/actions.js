/**
 * Las acciones son las encargadas de realizar las tareas asíncronas y llamar a las mutaciones que cambiarán el estado
 */
import authService from '../Services/auth.service'

const actions = {
  logIn: async ({ commit }, user) => {
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
  checkLogged: ({commit}) => {
    let user = authService.getCurrentUser()
    if (user) commit('logIn', user)
  },
  startSpinner: ({commit}) => {
    commit('setSpinner', true)
  },
  stopSpinner: ({commit}) => {
    commit('setSpinner', false)
  }
}

export default actions

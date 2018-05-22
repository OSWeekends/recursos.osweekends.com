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
  }
}

export default actions

/**
 * Aqui se crean las funciones para recoger objetos específicos del estado
 */

const getters = {
  getUser: state => state.user,
  isLogged: state => (Object.keys(state.user).length === 0)
}

export default getters

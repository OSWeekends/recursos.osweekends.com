/**
 * Aqui se crean las funciones para recoger objetos específicos del estado
 */

const getters = {
  getUser: state => state.user,
  isLogged: state => (state.user !== null)
}

export default getters

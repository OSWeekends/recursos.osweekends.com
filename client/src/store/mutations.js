/**
 * Las mutaciones son las únicas que DEBEN  modificar el estado (por tenerlo todo centralizado y eso)
 */
const mutations = {
  logIn: (state, user) => {
    state.user = user
  },
  logOut: (state) => {
    state.user = null
  },
  setResource: (state, resource) => {
    state.resource = resource
  },
  setModal: (state, modal) => {
    state.modals = modal
  },
  setSpinner: (state, payload) => {
    state.loading = payload
  }
}

export default mutations

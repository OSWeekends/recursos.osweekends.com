/**
 * Las mutaciones son las únicas que DEBEN  modificar el estado (por tenerlo todo centralizado y eso)
 */
const mutations = {
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

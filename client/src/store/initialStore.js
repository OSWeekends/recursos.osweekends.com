/**
 * Store inicial, aquí se inicializa el estado inicial del store, no se recomiendo inicializar a undefined
 * mejor inicializar a null!
 */
export const initialState = {
  resource: {
    title: '',
    description: '',
    url: '',
    img: '',
    creator: '',
    lang: '',
    type: '',
    category: []
  }
}

const store = {
  ...initialState,
  resource: {
    title: '',
    description: '',
    url: '',
    img: '',
    creator: '',
    lang: '',
    type: '',
    category: []
  },
  loading: false,
  modals: 0
}

export default store

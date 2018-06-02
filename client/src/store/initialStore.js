/**
 * Store inicial, aquí se inicializa el estado inicial del store, no se recomiendo inicializar a undefined
 * mejor inicializar a null!
 */
const store = {
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
  user: null,
  loading: false
}

export default store

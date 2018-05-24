/**
 * Store inicial, aquí se inicializa el estado inicial del store, no se recomiendo inicializar a undefined
 * mejor inicializar a null!
 */
const store = {
  user: {},
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

export default store

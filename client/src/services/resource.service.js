import firebase from 'firebase'

export default {
  getTypes (types) {
    return firebase.firestore().collection('Type').doc('type')
      .onSnapshot((doc) => {
        let obj = doc.data()
        Object.keys(obj).map((key, index) => {
          types.push(obj[key])
        })
      })
  },
  getCategory (category) {
    return firebase.firestore().collection('Category').doc('category')
      .onSnapshot((doc) => {
        let obj = doc.data()
        Object.keys(obj).map((key, index) => {
          category.push(obj[key])
        })
      })
  },
  getUrl (url) {
    return firebase.firestore().collection('Url').doc('url')
      .onSnapshot((doc) => {
        let obj = doc.data()
        Object.keys(obj).map((key, index) => {
          url.push(obj[key])
        })
      })
  }
}

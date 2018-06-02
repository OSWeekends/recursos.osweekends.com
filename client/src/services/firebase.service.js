export default {
  getResourceFirebase (firebase) {
    return firebase.firestore().collection('Recursos').get()
  },
  getUrlResourceFirebase (firebase) {
    return firebase.firestore().collection('Url').get()
  },
  resourceFirebase (firebase) {
    return firebase.firestore().collection('Recursos')
  },
  resource (firebase, id) {
    return firebase.firestore().collection('Recursos').doc(id).get()
  }
}

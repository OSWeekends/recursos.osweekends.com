import firebase from 'firebase'

export default {
  getCurrentUser () {
  // check if user is logged
    return firebase.auth().currentUser
  }
}

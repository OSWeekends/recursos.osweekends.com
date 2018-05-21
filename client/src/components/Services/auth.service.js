import firebase from 'firebase'
import Router from '../../router/index.js'

var provider = new firebase.auth.GithubAuthProvider()
export default {
  getCurrentUser () {
  // check if user is logged
    return firebase.auth().currentUser
  },

  login () {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // retrieve the user info and store it in firebase db for custom properties of the user
      var userData = JSON.stringify(result.user)
      userData = JSON.parse(userData)
      // Store the user in /user/{{uid}}/datos...
      firebase.firestore().collection('User').doc(userData.uid).set({userData})
        .then(() => Router.go({path: Router.path}))
      // Reload the page to get changes in Header component
    }).catch((error) => {
      console.log('Unable to Log in!' + error)
    })
  },
  // Log out
  logout () {
    firebase.auth().signOut().then(() => {
      console.log('Logout success!')
      // Redirect to home & Reload the page to get changes in Header component
      Router.push('/')
      Router.go({path: Router.path})
    }).catch((error) => {
      console.log('Unable to Logout' + error)
    })
  }
}

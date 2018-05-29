import firebase from 'firebase'
import Router from '../router/index.js'

const provider = new firebase.auth.GithubAuthProvider()
export default {
  getCurrentUser () {
  // check if user is logged
    return firebase.auth().currentUser
  },

  login () {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider).then((result) => {
        // retrieve the user info and store it in firebase db for custom properties of the user
        var userData = JSON.stringify(result.user)
        userData = JSON.parse(userData)
        // Store the user in /user/{{uid}}/datos...
        firebase.firestore().collection('User').doc(userData.uid).set({userData})
          .then((resp) => {
            // Router.go({path: Router.path})
            resolve(userData)
          })
        // Reload the page to get changes in Header component
      }).catch((error) => {
        console.log('Unable to Log in!' + error)
        reject(new Error(`Unable to Log in! ${error}`))
      })
    })
  },
  // Log out
  logout () {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(() => {
        console.log('Logout success!')
        resolve(true)
        // Redirect to home & Reload the page to get changes in Header component
        // Router.go('/')
        Router.push('/')
        // Router.go({path: Router.path})
      }).catch((error) => {
        reject(error)
        // console.log('Unable to Logout' + error)
      })
    })
  }
}

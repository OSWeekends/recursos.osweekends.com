import firebase from 'firebase'
import Router from '../router/index.js'

const provider = new firebase.auth.GithubAuthProvider()
export default {
  getCurrentUser () {
    return new Promise(async (resolve, reject) => {
      try {
        // check if user is logged
        var firebaseUser = await firebase.auth().currentUser
        if (firebaseUser) {
          await firebase.firestore().collection('User').doc(firebaseUser.uid).get().then(doc => {
            if (doc.exists) {
              var currentUser = doc.data()
              resolve(currentUser.userData)
            } else {
              console.log('no existe el usuario solicitado')
              return null
            }
          })
        }
      } catch (error) {
        reject(new Error(`Unable to get current user! ${error}`))
      }
    })
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
            resolve(userData)
          })
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
        // Redirect to home
        Router.push('/')
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

import firebase from 'firebase'

const provider = new firebase.auth.GithubAuthProvider()
export default {
  getCurrentUser () {
    return new Promise(async (resolve, reject) => {
      try {
        var firebaseUser = await firebase.auth().currentUser
        if (firebaseUser) {
          let doc = await firebase.firestore().collection('User').doc(firebaseUser.uid).get()
          if (doc.exists) {
            var currentUser = doc.data()
            resolve(currentUser.userData)
          } else {
            console.log('no existe el usuario solicitado')
            resolve(undefined)
          }
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
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

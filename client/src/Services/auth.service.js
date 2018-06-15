import firebase from 'firebase'
import axios from 'axios'

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
        console.log('Unable to get current user!' + error)
        reject(new Error(`Unable to get current user! ${error}`))
      }
    })
  },
  login () {
    return new Promise(async (resolve, reject) => {
      try {
        // User firebase github login provider
        let auth = await firebase.auth().signInWithPopup(provider)
        // Get github's user accessToken
        const token = auth.credential.accessToken
        // Use github API and fetch user info
        let gitHubData = await this.getGitHubData(token)
        let userData = JSON.stringify(auth.user)
        userData = JSON.parse(userData)
        userData.gitHubData = gitHubData
        // Store the user in /user/{{uid}}/datos...
        await firebase.firestore().collection('User').doc(userData.uid).set({userData})
        resolve(userData)
      } catch (error) {
        console.log('Unable to Log in!' + error)
        reject(new Error(`Unable to Log in! ${error}`))
      }
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
  },

  async getGitHubData (token) {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await axios.get('https://api.github.com/user?access_token=' + token)
        resolve(data.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

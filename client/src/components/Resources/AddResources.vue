<template>
  <v-container>
    <v-layout row>
      <v-flex md10 offset-md1>
        <v-form ref="form" @submit.prevent='addResource'>
          <v-layout row>
            <v-text-field v-model="resource.url" label="Url" required :rules="urlRules"></v-text-field>
          </v-layout >
          <v-layout row>
            <v-select :items="types" v-model="resource.type" label="Tipo" single-line autocomplete :rules="typeRules"></v-select>
          </v-layout>
          <v-layout row>
            <v-select :items="categories" v-model="resource.category" label="Categorías" single-line autocomplete multiple></v-select>
          </v-layout>
          <v-layout row>
            <div class="mx-auto">
              <v-btn @click="submit" title="Guardar" class="blue lighten-1">
                <v-icon left class="white--text">send</v-icon> <span class="white--text"> Guardar</span>
                </v-btn>
                <v-btn @click="clear" title="Limpiar" class="red">
                <v-icon left class="white--text">clear</v-icon><span class="white--text">Limpiar</span>
              </v-btn>
            </div>
            </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
    <pre>{{ resource }}</pre>
    <pre>{{ types }}</pre>
    <pre>{{ categories }}</pre>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import service from '@/services/formResources.js'

export default {
  name: 'resources',
  data () {
    return {
      exist: 0,
      user: '',
      types: [],
      categories: [],
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
      urlRules: [
        v => !!v || 'Url is required',
        // TODO Find regexp that match protocols
        v => /(^\w+:|^)\/\//.test(v) || 'Insert Urls without protocol'
      ],
      typeRules: [
        v => !!v || 'Type is required'
      ]
    }
  },
  created () {
    // Get Types, call to the Firebase bd, get the response object, iterate the keys, and push the result values into types array
    firebase.firestore().collection('Type').doc('type')
      .onSnapshot((doc) => {
        let obj = doc.data()
        Object.keys(obj).map((key, index) => {
          this.types.push(obj[key])
        })
      })
    // Get Categories, call to the Firebase bd, get the response object, iterate the keys, and push the result values into categories array
    firebase.firestore().collection('Category').doc('category')
      .onSnapshot((doc) => {
        let obj = doc.data()
        Object.keys(obj).map((key, index) => {
          this.categories.push(obj[key])
        })
      })
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser
      this.user = this.currentUser.displayName
    }
  },
  methods: {
    addResource () {
      firebase.firestore().collection('Recursos').get().then((querySnapshot) => querySnapshot.forEach((doc) => {
        if (doc.data().url === this.resource.url) {
          this.exist = 1
        }
      }))
        .then(() => {
          if (this.exist === 0) {
            this.axios.get('https://api.microlink.io?url=' + this.resource.url)
              .then((response) => {
                this.resource.title = response.data.data.title
                this.resource.description = response.data.data.description
                this.resource.url = response.data.data.url
                this.resource.img = response.data.data.image.url
                this.resource.type = this.resource.type
                this.resource.category = this.resource.category
                this.resource.creator = this.user
                this.resource.lang = response.data.data.lang
                service.form(this.resource)
                this.$router.push({ name: 'AddResources2' })
              })
              .catch((error) => console.log(error))
          } else {
            this.$notify({
              group: 'foo',
              text: 'La url que deseas guardar esta duplicada',
              type: 'error',
              duration: 3000,
              speed: 300
            })
          }
        })
    },
    submit () {
      if (this.$refs.form.validate()) {
        // check if the form is valid and add the resource
        this.addResource()
      }
    },
    clear () {
      // Clears the form and reset validations
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
</style>

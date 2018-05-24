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
import authService from '../../Services/auth.service.js'
import { mapState } from 'vuex'

export default {
  name: 'resources',
  data () {
    return {
      exist: 0,
      types: [],
      categories: [],
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
  computed: mapState({
    resource: state => state.resource
  }),
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
    // Get UserInfo
    this.currentUser = authService.getCurrentUser()
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
            this.axios.get('https://api.microlink.io?url=' + this.$store.state.resource.url)
              .then((response) => {
                this.$store.state.resource.title = response.data.data.title
                this.$store.state.resource.description = response.data.data.description
                this.$store.state.resource.url = response.data.data.url
                this.$store.state.resource.img = response.data.data.image.url
                this.$store.state.resource.type = this.resource.type
                this.$store.state.resource.category = this.resource.category
                this.$store.state.resource.creator = this.currentUser.displayName
                this.$store.state.resource.lang = response.data.data.lang
                console.log(this.$store.state.resource)
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

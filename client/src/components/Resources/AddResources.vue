<template>
  <v-container class="container">
    <v-layout row>
      <v-flex
        md10
        offset-md1
      >
        <h3>Paso 1/2</h3>
        <h4>Introduce la url del recurso, tipo y categoria</h4>
        <v-form
          ref="form"
          @submit.prevent='addResource'
        >
          <v-layout row>
            <v-text-field
              v-model="resource.url"
              label="Url"
              required
              :rules="urlRules"
            ></v-text-field>
          </v-layout >
          <v-layout row>
            <v-select
              :items="types"
              v-model="resource.type"
              label="Tipo"
              single-line autocomplete
              :rules="typeRules"
            ></v-select>
          </v-layout>
          <v-layout row>
            <v-select
              :items="categories"
              v-model="resource.category"
              label="Categorías"
              single-line
              autocomplete
              multiple
            ></v-select>
          </v-layout>
          <v-layout row>
            <div class="mx-auto">
              <v-btn
                @click="submit"
                title="Guardar"
                class="blue lighten-1"
              >
                <v-icon
                  left
                  class="white--text"
                >send</v-icon>
                <span
                  class="white--text"
                > Paso 2/2</span>
                </v-btn>
                <v-btn
                  @click="clear"
                  title="Limpiar"
                  class="red"
                >
                <v-icon
                  left
                  class="white--text"
                >clear</v-icon>
                <span
                  class="white--text"
                >Limpiar</span>
              </v-btn>
            </div>
            </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import authService from '../../Services/auth.service.js'
import resourceService from '../../Services/resource.service.js'
import microlinkService from '../../Services/microlink.service.js'
import firebaseService from '../../Services/firebase.service.js'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'resources',
  data () {
    return {
      exist: 0,
      types: [],
      categories: [],
      img: '',
      urlRules: [
        v => !!v || 'Url is required',
        // regexp that match protocols
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
    resourceService.getTypes(this.types)
    // Get Categories, call to the Firebase bd, get the response object, iterate the keys, and push the result values into categories array
    resourceService.getCategory(this.categories)
    // Get UserInfo
    this.currentUser = authService.getCurrentUser()
  },
  methods: {
    ...mapMutations(['setResource', 'setModal']),
    ...mapActions(['startSpinner', 'stopSpinner']),
    async add () {
      this.startSpinner()
      await this.addResource()
      this.stopSpinner()
    },
    addResource () {
      firebaseService.getResourceFirebase(firebase)
        .then((querySnapshot) => querySnapshot.forEach((doc) => {
          if (doc.data().url === this.resource.url) {
            this.exist = 1
          }
        }))
        .then(() => {
          console.log(this.img)
          if (this.exist === 0) {
            microlinkService.getScreenshot(this.$store.state.resource.url)
              .then((response) => {
                if (response.data.data.screenshot.url === null || response.data.data.screenshot.url === '') {
                  this.img = null
                  console.log(this.img)
                } else {
                  this.img = response.data.data.screenshot.url
                  console.log(this.img)
                }
              })
              .then(() => {
                microlinkService.getUrl(this.$store.state.resource.url)
                  .then((response) => {
                    console.log(this.img)
                    let resource = {
                      title: response.data.data.title,
                      description: response.data.data.description,
                      url: this.resource.url,
                      img: this.img,
                      type: this.resource.type,
                      category: this.resource.category,
                      creator: this.currentUser.displayName,
                      lang: response.data.data.lang
                    }
                    this.setResource(resource)
                    this.setModal(2)
                  })
                  .catch((error) => console.log(error))
              })
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
        this.add()
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
.container{
  background-color: white;
  border-radius: 30px;
  border: 3px solid #003da5;
}
</style>

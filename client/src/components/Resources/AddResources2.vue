<template>
  <v-container>
    <v-layout row>
      <v-flex md10 offset-md1>
        <v-form ref="form" @submit.prevent='addResource'>
          <v-layout row>
            <v-text-field v-model="resource.title" label="Titulo" required :rules="titleRules"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field v-model="resource.description" label="Descripcion" required :rules="descriptionRules"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field v-model="resource.url" label="Url" required :rules="descriptionRules"></v-text-field>
          </v-layout >
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
import { mapState } from 'vuex'

export default {
  name: 'resources',
  data () {
    return {
      types: [],
      categories: [],
      titleRules: [
        v => !!v || 'Title is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required'
      ],
      urlRules: [
        v => !!v || 'Url is required',
        // TODO Find regexp that match protocols
        v => /(^\w+:|^)\/\//.test(v) || 'Insert Urls without protocol'
      ]
    }
  },
  computed: mapState({
    resource: state => state.resource
  }),
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser
      this.user = this.currentUser.displayName
    }
  },
  methods: {
    addResource () {
      firebase.firestore().collection('Recursos')
        .add({
          title: this.resource.title,
          description: this.resource.description,
          url: this.resource.url,
          img: this.resource.img,
          type: this.resource.type,
          category: this.resource.category,
          creator: this.resource.creator,
          lang: this.resource.lang
        })
        .then(() => {
          this.$refs.form.reset()
          this.$notify({
            group: 'foo',
            text: 'Añadido nuevo recurso',
            type: 'success',
            duration: 5000,
            speed: 100,
            title: 'El recurso: ' + this.resource.title + 'se ha añadido correctamente'
          })
          this.$router.push({ name: 'ListResources' })
        })
        .catch(() => {
          this.$notify({
            group: 'foo',
            text: 'hubo un error al guardar el recurso',
            type: 'error',
            duration: 5000,
            speed: 100
          })
        })
        // .then(() => this.axios.post('http://localhost:3000/', this.resource))
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

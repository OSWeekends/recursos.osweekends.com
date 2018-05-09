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
            <v-select :items="types" v-model="resource.type" label="Tipo" single-line autocomplete :filter="customFilter" required :rules="typeRules"></v-select>
          </v-layout>
          <v-layout row>
            <v-select :items="categories" v-model="resource.category" label="Categorías" single-line autocomplete :filter="customFilter" multiple></v-select>
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
import axios from 'axios'

export default {
  name: 'resources',
  data () {
    return {
      types: [],
      categories: [],
      resource: {
        title: '',
        description: '',
        url: '',
        type: '',
        category: []
      },
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
      ],
      typeRules: [
        v => !!v || 'Type is required'
      ]
    }
  },
  created () {
    // Get Types, call to the Firebase bd, get the response object, iterate the keys, and push the result values into types array
    firebase.database().ref('type')
      .once('value', snapshot => {
        var obj = snapshot.val()
        Object.keys(obj).map((key, index) => {
          this.types.push(obj[key])
        })
      })
    // Get Categories, call to the Firebase bd, get the response object, iterate the keys, and push the result values into categories array
    firebase.database().ref('category')
      .once('value', snapshot => {
        var obj = snapshot.val()
        Object.keys(obj).map((key, index) => {
          this.categories.push(obj[key])
        })
      })
  },
  methods: {
    addResource () {
      axios.get('https://api.microlink.io/?url=https%3A%2F%2F' + this.resource.url + '&screenshot&filter=screenshot')
        .then((response) => {
          firebase.database().ref('Recursos')
            .push({
              title: this.resource.title,
              description: this.resource.description,
              url: this.resource.url,
              img: response.data.data.screenshot.url,
              type: this.resource.type,
              category: this.resource.category
            })
            .then(() => {
              this.$refs.form.reset()
            })
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

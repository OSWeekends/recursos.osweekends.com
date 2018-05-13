<template>
  <div class="container">
    <div class="row">
      <div class="card-panel center">
        <h3 class="header center grey-text text-darken-3"> Nuevo recurso</h3>
        {{user}}
        <form @submit.prevent='addResource'>
          <div class="row">
            <div class="input-field col s12">
              <input type='text' v-model='resource.title'>
              <label>Titulo</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type='text' v-model='resource.description'>
              <label>Descripcion</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type='text' v-model='resource.url'>
              <label>Url</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <md-field>
                  <label for="type">Tipo</label>
                  <md-select v-model="resource.type" name="type" id="movie">
                    <md-option :value="key" v-for="(key, tipo) in types" :key="tipo.id">{{tipo}}</md-option>
                  </md-select>
                </md-field>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <md-field>
                  <label for="category">Category</label>
                  <md-select v-model="cate" name="category" id="category">
                    <md-option :value="key" v-for="(key, cate) in cate" :key="cate.id">{{cate}}</md-option>
                  </md-select>
                </md-field>
            </div>
          </div>
          <div class="row">
            <div class="left">
              <button class="btn waves-effect waves-light" type="button" v-on:click="add(cate)" name="guardar">Añadir categoria
              </button>
            </div>
          </div>
          <div class="row">
            <div class="center">
              <button class="btn waves-effect waves-light" type="submit" name="guardar">Guardar
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
          <pre>{{ resource }}</pre>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
  name: 'resources',
  data () {
    return {
      types: [],
      cate: [],
      user: '',
      resource: {
        title: '',
        description: '',
        url: '',
        type: '',
        category: [''],
        like: 0
      }
    }
  },
  created () {
    firebase.database().ref('type')
      .once('value', snapshot => { this.types = snapshot.val() })
    firebase.database().ref('category')
      .once('value', snapshot => { this.cate = snapshot.val() })
    if (firebase.auth().currentUser) {
      this.user = firebase.auth().currentUser.displayName
      this.isLoggedIn = true
    }
  },
  methods: {
    add: function (event) {
      this.resource.category.push(event)
      firebase.database().ref('category')
        .once('value', snapshot => { this.cate = snapshot.val() })
    },
    addResource () {
      axios.get('https://api.microlink.io/?url=https%3A%2F%2F' + this.resource.url + '&screenshot&filter=screenshot')
        .then((response) => {
          firebase.database().ref('Recursos/')
            .push({
              title: this.resource.title,
              description: this.resource.description,
              url: this.resource.url,
              img: response.data.data.screenshot.url,
              type: this.resource.type,
              category: this.resource.category,
              creator: this.user,
              like: this.resource.like
            })
            .then(() => {
              this.resource.title = ''
              this.resource.description = ''
              this.resource.url = ''
              this.resource.type = ''
              this.resource.category = ['']
            })
        })
        .then(() => {
          this.$notify({
            group: 'foo',
            text: 'Añadido nuevo recurso',
            type: 'success',
            duration: 3000,
            speed: 300,
            title: this.resource.title
          })
        })
        .catch(() => {
          this.$notify({
            group: 'foo',
            text: 'hubo un error al guardar el recurso',
            type: 'error',
            duration: 3000,
            speed: 300,
            title: this.resource.title
          })
        })
    }
  }
}
</script>

<style scoped>
</style>

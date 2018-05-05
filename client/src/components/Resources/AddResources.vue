<template>
  <div class="container">
    <div class="row">
      <div class="card-panel center">
        <h3 class="header center grey-text text-darken-3"> Nuevo recurso</h3>
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
                  <label for="category">Categoria</label>
                  <md-select v-model="resource.type" name="category" id="movie">
                    <md-option :value="key" v-for="(key, tipo) in types" :key="tipo.id">{{tipo}}</md-option>
                  </md-select>
                </md-field>
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
      resource: {
        title: '',
        description: '',
        url: '',
        type: ''
      }
    }
  },
  created () {
    firebase.database().ref('type')
      .once('value', snapshot => { this.types = snapshot.val() })
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
              type: this.resource.type
            })
            .then(() => {
              this.resource.title = ''
              this.resource.description = ''
              this.resource.url = ''
              this.resource.type = ''
            })
        })
    }
  }
}
</script>

<style scoped>
</style>

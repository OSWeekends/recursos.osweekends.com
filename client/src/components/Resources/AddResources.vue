<template>
  <div class="container">
    <div class="center">
      <h3>Nuevo Recurso</h3>
    </div>
    <div class="row">
      <form @submit.prevent='addResource'>
        <div class="row">
          <div class="input-field col s12">
            <input type='text' v-model='resource.title'>
            <label>Titulo</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea v-model='resource.description' col='30' row='10'></textarea>
            <label>Descripción</label>
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
            <select v-model="resource.type">
              <option disabled value="">Please select one</option>
              <option value="asd">dfe</option>

              <option disabled v-for="tipo in types" :key="tipo.id">{{tipo}}</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </div>
        <div class="row">
          <div class="center">
            <input type='submit' value='guardar'>
          </div>
        </div>
        <pre>{{ resource }}</pre>
        <ul>
          <li v-for="tipo in types" :key="tipo.id">{{tipo}}</li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import $ from 'jquery'

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
  mounted () {
    $('select').material_select()
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

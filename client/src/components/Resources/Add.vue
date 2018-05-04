<template>
  <div>
    <form @submit.prevent='addResource'>
      <label>Titulo</label>
      <input type='text' v-model='title' placeholder='Titulo'><br><br><br>

      <label>Descripción</label>
      <textarea v-model='description' col='30' row='10' placeholder='Descripcion'></textarea><br><br><br>

      <label>Url</label>
      <input type='text' v-model='url' placeholder='Url'>

      <input type='submit' value='guardar'>

    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
  name: 'resources',
  data () {
    return {
      title: '',
      description: '',
      url: ''
    }
  },
  methods: {
    addResource (tipo) {
      axios.get('https://api.microlink.io/?url=https%3A%2F%2F' + this.url + '&screenshot&filter=screenshot')
        .then((response) => {
          firebase.database().ref('Recursos')
            .push({
              title: this.title,
              description: this.description,
              url: this.url,
              img: response.data.data.screenshot.url
            })
            .then(() => {
              this.title = ''
              this.description = ''
              this.url = ''
            })
        })
    }
  }
}
</script>

<style scoped>
</style>

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

export default {
  name: 'resources',
  data () {
    return {
      msg: 'hola',
      title: '',
      description: '',
      url: ''
    }
  },
  methods: {
    addResource () {
      firebase.database().ref('Recursos')
        .push({
          title: this.title,
          description: this.description,
          url: this.url
        })
        .then(() => {
          this.title = ''
          this.description = ''
          this.url = ''
        })
    }
  }
}
</script>

<style scoped>
</style>

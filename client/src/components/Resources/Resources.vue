<template>
  <div>
    <h3>RECURSOS</h3>
    <ul v-for="resource in resource" :key="resource.id">
      <img :src="resource.img">
      <h3>{{resource.title}}</h3>
      <p>{{resource.description}}</p>
      <a :href="resource.url" target="_blank">visitame</a>
    </ul>
</div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
  name: 'resources',
  data () {
    return {
      msg: 'hola',
      resource: [],
      img: ''
    }
  },
  created () {
    firebase.database().ref('Recursos')
      .on('value', snapshot => this.resources(snapshot.val()))
  },
  methods: {
    resources (resource) {
      this.resource = []
      for (let key in resource) {
        axios.get('https://api.microlink.io/?url=https%3A%2F%2F' + resource[key].url + '&screenshot&filter=screenshot')
          .then((response) => {
            console.log(response.data.data.screenshot.url)
            this.resource.push({
              title: resource[key].title,
              description: resource[key].description,
              url: 'https://' + resource[key].url,
              img: response.data.data.screenshot.url
            })
          })
      }
    }
  }
}
</script>

<style scoped>
  img{
    width: 60%;
  }
</style>

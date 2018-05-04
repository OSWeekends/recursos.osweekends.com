<template>
  <div class="container">
    <ul v-for="resource in resource" :key="resource.id">
      <img :src="resource.img">
      <a :href="resource.url" target="_blank"><h3>{{resource.title}}</h3></a>
      <p>{{resource.description}}</p>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'resources',
  data () {
    return {
      resource: []
    }
  },
  created () {
    firebase.database().ref('Recursos')
      .on('value', snapshot => this.resources(snapshot.val()))
  },
  methods: {
    resources (resource) {
      for (let key in resource) {
        this.resource.push({
          title: resource[key].title,
          description: resource[key].description,
          url: 'https://' + resource[key].url,
          img: resource[key].img
        })
      }
    }
  }
}
</script>

<style scoped>
  .container{
    display: grid;
    height: 100vh;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  ul{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    border-radius: 30px;
  }
  a{
    display: block;
  }

  img{
    width: 85%;
  }
</style>

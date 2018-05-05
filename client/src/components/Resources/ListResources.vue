<template>
  <div>
    <div class="container">
      <div class="card hoverable grey lighten-4" v-for="resource in resources" :key="resource.id">
        <div class="card-image">
          <img :src="resource.img">
        </div>
        <div class="card-content">
        <span class="card-title blue-text  text-lighten-1"><strong>{{resource.title}}</strong></span>
          <p>{{resource.description}}</p>
        </div>
        <div class="card-action grey darken-3">
          <a :href="resource.url" target="_blank" class="white-text">Link</a>
        </div>
      </div>
    </div>
    <div class="fixed-action-btn">
      <router-link to="/resources/new" class="btn-floating btn-large red">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'resources',
  data () {
    return {
      resources: []
    }
  },
  created () {
    firebase.database().ref('Recursos')
      .on('value', snapshot => this.getResources(snapshot.val()))
  },
  methods: {
    getResources (resources) {
      for (let key in resources) {
        this.resources.push({
          title: resources[key].title,
          description: resources[key].description,
          url: 'https://' + resources[key].url,
          img: resources[key].img
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 10px;
  }

  a:hover{
    text-decoration: underline;
  }
</style>

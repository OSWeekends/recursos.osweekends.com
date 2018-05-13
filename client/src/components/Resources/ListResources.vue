<template>
  <div>
    <div class="container">
      <input type="search" v-model='search' placeholder="Buscar recurso">
      <div class="card hoverable grey lighten-4" v-for="resource in serchDo" :key="resource.id">
        <div class="card-image">
          <img :src="resource.img">
        </div>
        <div class="card-content">
        <span class="card-title blue-text  text-lighten-1"><strong>{{resource.title}}</strong></span>
          <p>{{resource.description}}</p>
          <p>{{resource.creator}}</p>
          <p>{{resource.type}}</p>
          <div v-for="cate in resource.category" :key="cate.id" :class="cate">{{cate}}</div>
        </div>
        <button type="button" @click="likes(resource)">Like</button>
        <div class="card-action grey darken-3">
          <a :href="resource.url" target="_blank" class="white-text">Link</a>
        </div>
      </div>
    </div>
    <div v-if="isLoggedIn" class="fixed-action-btn">
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
      like: 0,
      resources: [],
      search: '',
      isLoggedIn: false,
      user: ''
    }
  },
  created () {
    // Get the list of resources
    firebase.database().ref('Recursos')
      .on('value', snapshot => this.getResources(snapshot.val()))
    // check if user is logged
    if (firebase.auth().currentUser) {
      this.user = firebase.auth().currentUser.uid
      this.isLoggedIn = true
    }
  },
  methods: {
    getResources (resources) {
      for (let key in resources) {
        console.log(key)
        this.resources.push({
          key: key,
          title: resources[key].title,
          description: resources[key].description,
          url: 'https://' + resources[key].url,
          img: resources[key].img,
          type: resources[key].type,
          category: resources[key].category,
          creator: resources[key].creator,
          me: resources[key].like
        })
      }
    },
    likes (resource) {
      console.log(resource)
      const likes = resource.me + 1
      firebase.database().ref(`Recursos/` + resource.key + `/like`).set(likes)
        .then((res) => {
          console.debug(res)
        })
    }
  },
  computed: {
    serchDo () {
      return this.resources.filter((resource) => resource.category[0].includes(this.search))
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
  input{
    grid-column-start: 1;
    grid-column-end: 4;
  }
  a:hover{
    text-decoration: underline;
  }
  .css{
    background-color: blue;
    color: white;
    padding: 10px;
    width: 30%;
  }
  .html{
    background-color: yellow
  }
</style>

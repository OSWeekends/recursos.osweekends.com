<template>
  <div class="container">
    <section class="infoPersonal">
      <figure>
        <img class="userImg" :src="getUser().photoURL">
      </figure>
      <h1>{{getUser().displayName}}</h1>
      <p>{{getUser().gitHubData.bio}}</p>
      <p>{{getUser().gitHubData.location}}</p>
      <button type="button" class="github">
        <a :href="getUser().gitHubData.html_url" target="blank">Perfil Github</a>
      </button>
      <h1>Recursos Creados</h1>
      <section class="resources">
        <card-resources
          v-for="resource in resources"
          :key="resource.id"
          v-bind:resource="resource"
          class="item"
        >
        </card-resources>
      </section>
      <h1>Recursos Favoritos</h1>
      <button type="button" @click="logout" class="logout">
        Cerrar sesion
      </button>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../../router'
import firebase from 'firebase'
import firebaseService from '../../Services/firebase.service.js'
import ListResourcesCreateUser from '../Resources/ListResourcesCreateUser'

export default {
  name: 'UserPage',
  components: {
    'card-resources': ListResourcesCreateUser
  },
  data () {
    return {
      resources: []
    }
  },
  created () {
    let user = this.getUser().displayName
    firebaseService.resourcesCreate(firebase, user)
      .then((querySnapshot) => querySnapshot.forEach((doc) =>
        this.getResources(doc.data(), doc.id)
      ))
  },
  methods: {
    // Log out
    logout () {
      this.logOut()
      router.go(-1)
    },
    getResources (resources, id) {
      this.resources.push({
        id: id,
        title: resources.title,
        description: resources.description,
        url: resources.url,
        img: resources.img,
        type: resources.type,
        category: resources.category,
        creator: resources.creator
      })
    },
    ...mapGetters(['getUser']),
    ...mapActions(['logOut'])
  }
}
</script>

<style scoped>
.container {
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
figure{
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.infoPersonal{
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  padding: 20px;
  border-radius: 20px;
}
.userImg{
  width: 20%;
}
.logout{
  width: 30%;
  outline: 0;
  border-radius: 30px;
  padding: 15px;
  margin-top: 10px;
  background-color: red;
  color: white;
}
.github{
  width: 30%;
  outline: 0;
  border: 2px solid black;
  border-radius: 30px;
  padding: 15px;
  background-color: #333;
}
.github a{
  color: white;
  text-decoration: none;
}
@media (max-width: 1000px) {
  .logout{
    width: 60%;
  }
  .github{
    width: 60%;
  }
  .userImg{
    width: 40%;
  }
  .item {
    width: 33%;
  }
}
@media (max-width: 600px) {
  .logout{
    width: 90%;
  }
  .github{
    width: 90%;
  }
  .userImg{
    width: 50%;
  }
  .item {
    width: 100%;
  }
}
.resources{
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.item {
  width: 25%;
  padding: 10px;
}
</style>

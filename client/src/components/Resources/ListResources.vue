<template>
  <div class="container">
    <div class="search">
      <input type=search v-model="search" placeholder="Buscar recurso"/>
    </div>
    <card-resources
      v-for="resource in filteredList"
      :key="resource.id"
      v-bind:resource="resource"
      class="item"
    >
    </card-resources>
    <a href="#" class="float" @click="modals(1)">
      <i class="fa fa-plus my-float"></i>
    </a>
    <v-dialog v-model="modal" max-width="500px">
      <add-resource v-if="modal==1"></add-resource>
      <add-resource2 v-if="modal==2"></add-resource2>
    </v-dialog>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseService from '../../Services/firebase.service.js'
import AddResource from './AddResources.vue'
import AddResource2 from './AddResources2.vue'
import CardResource from './CardResource'
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'resources',
  components: {
    'add-resource': AddResource,
    'add-resource2': AddResource2,
    'card-resources': CardResource
  },
  data () {
    return {
      resources: [],
      search: '',
      img: ''
    }
  },
  created () {
    // Get the list of resources
    firebaseService.getResourceFirebase(firebase)
      .then((querySnapshot) => querySnapshot.forEach((doc) =>
        this.getResources(doc.data(), doc.id)
      ))
  },
  methods: {
    ...mapMutations(['setModal']),
    ...mapGetters(['isLogged']),
    ...mapGetters({user: ['getUser']}),
    modals (modal) {
      this.setModal(modal)
    },
    getResources (resources, id) {
      if (resources.img === null) {
        this.img = '../../../static/logo.jpg'
      } else {
        this.img = resources.img
      }
      this.resources.push({
        id: id,
        title: resources.title,
        description: resources.description,
        url: resources.url,
        img: this.img,
        type: resources.type,
        category: resources.category,
        creator: resources.creator
      })
    }
  },
  computed: {
    modal: {
      get () {
        return this.$store.state.modals
      },
      set (value) {
        this.$store.commit('setModal', value)
      }
    },
    filteredList () {
      return this.resources.filter(resources => resources.description.includes(this.search) || resources.title.includes(this.search)
      )
    }
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
.search{
  width: 100%;
  margin: 0 auto;
}
input[type=search] {
  margin-bottom: 30px;
  width: 35%;
  border: 1px solid black;
  padding: 5px;
  height: 50px;
  border-radius: 50px;
  outline: none;
  font-size: 18px;
}
.item {
  width: 25%;
  padding: 10px;
}
@media (max-width: 1000px) {
  .item {
    width: 33%;
  }
}
@media (max-width: 850px) {
  .item {
    width: 48%;
  }
  input[type=search] {
    width: 50%;
  }
}
@media (max-width: 600px) {
  .item {
    width: 100%;
  }
  input[type=search] {
    width: 100%;
  }
}
.float{
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color: red;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  box-shadow: 2px 2px 3px #999;
}
.my-float{
  font-size: 20px;
  margin-top: 20px;
}
</style>

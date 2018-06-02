<template>
  <div>
    <v-container class="pb-0 pt-0">
      <v-layout row>
        <v-flex md10 offset-md1>
          <v-form>
            <v-text-field
              prepend-icon="search"
              v-model="search"
              label="Buscar"
            ></v-text-field>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row
        wrap
        v-for="resource in filteredList"
        :key="resource.id"
      >
      <card-resources
        v-bind:resource="resource"
      >
      </card-resources>
    </v-layout>
    </v-container>
    <div
      v-if="isLoggedIn"
      class="text-xs-center"
    >
      <v-btn
        to="/resources/new"
        fab
        fixed
        bottom
        right
        class="white--text red"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseService from '../../Services/firebase.service.js'
import CardResource from './CardResource'

export default {
  name: 'resources',
  components: {
    'card-resources': CardResource
  },
  data () {
    return {
      resources: [],
      search: '',
      isLoggedIn: false,
      currentUser: '',
      user: ''
    }
  },
  created () {
    // Get the list of resources
    firebaseService.getResourceFirebase(firebase)
      .then((querySnapshot) => querySnapshot.forEach((doc) =>
        this.getResources(doc.data(), doc.id)
      ))
    // check if user is logged
    if (firebase.auth().currentUser) {
      this.user = firebase.auth().currentUser.uid
      this.isLoggedIn = true
    }
  },
  methods: {
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
    }
  },
  computed: {
    filteredList () {
      return this.resources.filter(resources => {
        return resources.description.includes(this.search)
      })
    }
  }
}
</script>

<style scoped>
</style>

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
      v-if="isLogged()"
      class="text-xs-center"
    >
      <v-btn
        @click="modals(1)"
        fab
        fixed
        bottom
        right
        class="white--text red"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-dialog v-model="modal" max-width="500px">
        <add-resource v-if="modal==1"></add-resource>
        <add-resource2 v-if="modal==2"></add-resource2>
      </v-dialog>
    </div>
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
#resourceImg img{
  max-height: 250px;
}
</style>

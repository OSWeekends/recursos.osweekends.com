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
      <v-flex xs12 md10 offset-md1>
        <v-card class="info mb-3 grey lighten-3">
          <v-container fluid wrap>
            <v-layout row>
              <v-flex xs5 md4>
                <v-card-media
                  :src="resource.img"
                  height="100%"
                  id="resourceImg"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 md8>
                <v-card-title class="pt-0">
                  <div>
                    <h3 block class="headline mb-0">{{ resource.title }}</h3>
                    <p>{{resource.description | snippet(100) }}</p>
                    <p>Tipo: {{resource.type}}</p>
                    <p>Añadido por: {{resource.creator}}</p>
                    <div
                      v-for="cate in resource.category"
                      :key="cate.id"
                      class="category"
                    >
                      <v-chip disabled>{{cate}}</v-chip>
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    block
                    color="light-blue accent-4"
                    round
                    class="white--text"
                    :href="resource.url"
                    target="_blank"
                  >Link</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
    <div
      v-if="isLoggedIn"
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
import {mapMutations} from 'vuex'

export default {
  name: 'resources',
  components: {
    'add-resource': AddResource,
    'add-resource2': AddResource2
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
        this.getResources(doc.data())
      ))
    // check if user is logged
    if (firebase.auth().currentUser) {
      this.user = firebase.auth().currentUser.uid
      this.isLoggedIn = true
    }
  },
  methods: {
    ...mapMutations(['setModal']),
    modals (modal) {
      this.setModal(modal)
    },
    getResources (resources) {
      this.resources.push({
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

<style scoped> </style>

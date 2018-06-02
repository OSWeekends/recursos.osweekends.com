<template>
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
                   <v-btn
                    :to="id"
                    block
                    color="light-blue accent-4"
                    round
                    class="white--text"
                    target="_blank"
                  >Detalle</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
</v-flex>
</template>
<script>
import firebase from 'firebase'
import firebaseService from '../../Services/firebase.service.js'
export default {
  props: ['id'],
  data () {
    return {
      resource: {}
    }
  },
  created () {
    // Get the list of resources
    firebaseService.resource(firebase, this.id)
      .then((doc) =>
        this.getResources(doc.data(), doc.id))
    // check if user is logged
    if (firebase.auth().currentUser) {
      this.user = firebase.auth().currentUser.uid
      this.isLoggedIn = true
    }
  },
  methods: {
    getResources (resources, id) {
      this.resource = resources
      //   this.resource.title = resources.title
      //   this.description = resources.description
      //   this.url = resources.url
      //   this.img = resources.img
      //   this.type = resources.type
      //   this.category = resources.category
      //   this.creator = resources.creator
      console.log(this.resource)
    }
  }
}
</script>
<style>

</style>

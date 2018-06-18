<template>
    <v-flex xs12 md10 offset-md1>
        <v-card class="info mb-3 grey lighten-3">
          <v-container fluid wrap>
            <v-layout row>
              <v-flex xs5 md12>
                <v-card-media
                  height="100%"
                  id="resourceImg"
                >
                  <img :src="resource.img">
                </v-card-media>
              </v-flex>
              <v-flex xs7 md8>
                <v-card-title class="pt-0">
                  <div>
                    <h3 block class="headline mb-0">{{ resource.title }}</h3>
                    <p>{{resource.description}}</p>
                    <p>Tipo: {{resource.type}}</p>
                    <p>Añadido por: {{resource.creator}}</p>
                    <p>Idioma: {{resource.lang}}</p>
                    <div
                      class="category"
                    >
                      <v-chip
                        disabled
                        v-for="cate in resource.category"
                        :key="cate.id"
                      >{{cate}}</v-chip>
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
                    to="/resources"
                    block
                    color="light-blue accent-4"
                    round
                    class="white--text"
                    target="_blank"
                  >Recursos</v-btn>
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
  },
  methods: {
    getResources (resources, id) {
      this.resource = resources
    }
  }
}
</script>
<style>

</style>

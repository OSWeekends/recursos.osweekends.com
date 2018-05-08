<template>
  <div>
    <v-container class="pb-0 pt-0">
      <v-layout row>
        <v-flex md10 offset-md1>
          <v-form>
            <v-text-field prepend-icon="search" v-model="search" label="Buscar"></v-text-field>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
     <v-layout row wrap v-for="resource in serchDo" :key="resource.id">
      <v-flex xs12 md10 offset-md1>
        <v-card class="info mb-3 blue lighten-1">
          <v-container fluid wrap>
            <v-layout row>
              <v-flex xs5 md4>
                <v-card-media :src="resource.img" height="100%"></v-card-media>
              </v-flex>
              <v-flex xs7 md8>
                <v-card-title class="pt-0">
                  <div>
                    <h3 block class="headline mb-0">{{ resource.title }}</h3>
                    <p>{{resource.description}}</p>
                    <p>Tipo: {{resource.type}}</p>
                    <div v-for="cate in resource.category" :key="cate.id" :class="cate">{{cate}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                   <v-btn block color="grey darken-3" class="white--text" :href="resource.url" target="_blank">Link</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
    <div v-if="isLoggedIn" class="text-xs-center">
       <v-btn to="/resources/new" fab fixed bottom right class="white--text red">
      <v-icon>add</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'resources',
  data () {
    return {
      resources: [],
      search: '',
      isLoggedIn: false
    }
  },
  created () {
    // Get the list of resources
    firebase.database().ref('Recursos')
      .on('value', snapshot => this.getResources(snapshot.val()))
    // check if user is logged
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
    }
  },
  methods: {
    getResources (resources) {
      for (let key in resources) {
        this.resources.push({
          title: resources[key].title,
          description: resources[key].description,
          url: 'https://' + resources[key].url,
          img: resources[key].img,
          type: resources[key].type,
          category: resources[key].category
        })
      }
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

</style>

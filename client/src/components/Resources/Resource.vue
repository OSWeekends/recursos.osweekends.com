<template>
  <div class="container">
    <img :src="resource.img">
    <section class="text">
      <h1>{{ resource.title }}</h1>
      <h4>{{resource.description | snippet(100) }}</h4>
      <p>Añadido por: {{resource.creator}}</p>
      <ul class="category">
        <li
          v-for="cate in resource.category"
          :key="cate.id"
          class="categoryItems"
          :style="{'background-color': cate.color}"
        >
          {{cate.name}}
        </li>
      </ul>
    </section>
  </div>
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
<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
img{
  width: 40%;
  margin: 0 auto;
}
.text{
  width: 100%;
  margin-left: 30px;
}
h1{
  font-size: 30px;
  font-family: 'Lato', sans-serif;
}
.category{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.categoryItems{
  display: inline-block;
  border-radius: 20px;
  padding: 2px 5px;
  margin: 3px;
  color: white;
}
</style>

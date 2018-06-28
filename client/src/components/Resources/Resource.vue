<template>
  <div class="container">
    <img :src="resource.img">
    <section class="text">
        <div class="md-chip">
          <div class="md-chip-icon">{{ resource.type | capitalize }}</div>
            {{ resource.type }}
        </div>
      <h1>{{ resource.title }}</h1>
      <p class="description">{{ resource.description }}</p>
      <section class="information">
        <p>Añadido por: <a :href="resource.urlCreator" target="_blank"> {{resource.creator}} </a></p>
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
        <a class="button" :href="resource.url" target="_blank">link</a>
      </section>
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
      resource: {},
      urlUser: ''
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
  },
  filters: {
    capitalize: function (value) {
      console.log(value)
      value = value.toString()
      return value.charAt(0).toUpperCase()
    }
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img{
  width: 40%;
}
.text{
  width: 70%;
  margin-top: 30px;
}
h1{
  font-size: 30px;
  font-family: 'Lato', sans-serif;
  text-align: center;
}
.description{
  margin-top: 20px;
}
.information{
  margin-top: 30px;
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
.button{
  width: 30em;
  margin: 20px auto;
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #003da5;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  overflow: hidden;
  color: #003da5;
}
.button:hover{
  background-color: #003da5;
  color: white;
}
.md-chip {
  display: inline-block;
  background: #EFF8FB;
  padding: 0 12px;
  border-radius: 32px;
  font-size: 13px;
}
.md-chip, .md-chip-icon {
  height: 32px;
  line-height: 32px;
}
.md-chip-icon {
  display: block;
  float: left;
  background: #009587;
  width: 32px;
  border-radius: 50%;
  text-align: center;
  color: white;
  margin: 0 8px 0 -12px;
}
</style>

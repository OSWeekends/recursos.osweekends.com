<template>
    <router-link :to="id" tag="button">
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
    </router-link>
</template>
<script>
export default {
  name: 'card-resources',
  props: ['resource'],
  mounted () {
    // console.log(this.resource.id)
  },
  data () {
    return {
      id: '/resource/' + this.resource.id
    }
  }

}
</script>
<style scoped>
button{
  width: 33%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 600px) {
  button{
    display: flex;
    flex-direction: column;
  }
}
button:hover{
  background-color: #dfe2e7;
  border: 1px solid green;
  border-radius: 20px;
}
.text{
  width: 100%;
  margin: 10px;
}
p{
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
h1,h4{
  display: flex;
  justify-content: flex-start;
}
img{
  width: 80%;
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

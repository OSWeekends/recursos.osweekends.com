<template>
  <div class="container">
    <router-link :to="id" tag="button">
      <img :src="resource.img">
      <section class="text">
        <h1>{{ resource.title }}</h1>
        <h4>{{resource.description | snippet(100) }}</h4>
        <p>Tipo: {{resource.type}}</p>
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
  </div>
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
.container{
  margin: 0;
  padding: 0;
}
button{
  margin: 15px auto;
  width: 85%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 30px;
  -webkit-box-shadow: 14px 14px 30px -6px rgba(0,61,165,0.49);
  -moz-box-shadow: 14px 14px 30px -6px rgba(0,61,165,0.49);
  box-shadow: 14px 14px 30px -6px rgba(0,61,165,0.49);
}
@media (max-width: 600px) {
  button{
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 14px 14px 30px -6px rgba(0,61,165,1);
    -moz-box-shadow: 14px 14px 30px -6px rgba(0,61,165,1);
    box-shadow: 14px 14px 30px -6px rgba(0,61,165,1);
  }
}
button:hover{
  background-color: #dfe2e7;
}
.text{
  width: 80%;
  margin: 10px;
}
p{
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
img{
  max-height: 250px;
  max-width: 250px;
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

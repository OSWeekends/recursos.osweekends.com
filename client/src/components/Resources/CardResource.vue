<template>
  <div class="container">
    <article>
      <img :src="resource.img">
      <section class="text">
        <h1>{{ resource.title }}</h1>
        <p>{{resource.description | snippet(100) }}</p>
        <p>Tipo: {{resource.type}}</p>
        <p>Añadido por: {{resource.creator}}</p>
        <ul class="category">
          <li
            v-for="cate in resource.category"
            :key="cate.id"
            class="categoryItems"
          >
          {{cate}}
          </li>
        </ul>
      </section>
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
    </article>
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
article{
  margin: 5px auto;
  width: 85%;
  padding: 10px;
  border: 2px solid green;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 10px;
}
.text{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
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
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px;
  margin: 5px;
}
</style>

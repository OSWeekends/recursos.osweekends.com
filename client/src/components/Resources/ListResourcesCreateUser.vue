<template>
    <router-link :to="id" tag="button">
      <img :src="resource.img">
      <section class="text">
        <h1>{{ resource.title }}</h1>
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
}
.text{
  width: 100%;
  margin: 10px;
}
h1{
  text-align: left;
  margin-bottom: 20px;
}
img{
  width: 100%;
}
</style>

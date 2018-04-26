<template>
  <nav>
    <ul>
        <li><router-link to="/" exact>Home</router-link>  </li>
        <li><router-link to="/resources" exact>Recursos</router-link>  </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 18px;
    padding: 6px 8px;
}
nav{
    background: #24292e;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
     color: #fff;
    }
</style>

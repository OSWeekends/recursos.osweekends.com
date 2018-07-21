<template>
  <div class="container">
    <section class="textPresent">
      <h1>Proyecto Recursos</h1>
      <p>Open Source Weekends somos un grupo de personas que nos gustan hablar de hacer cosas y hacerlas. Por ello en nuestro canal de Slack, al cabo del día, se comparten muchos recursos muy interesantes. Pero Slack los borra y no todo el puedo puede acceder en cualquier momento a ellos. Por eso nace este proyecto, queremos que esos recursos queden guardados y que cualquier persona que desee pueda acceder a ellos. Ademas conoceras quien lo ha compartido, una de las partes que consideramos fundamentales es compartir y aprender unos de otros.</p>
    </section>
    <section class="textExplication">
      <div class="share">
        <i class="fas fa-share"></i>
        <h3>Comparte</h3>
        <p>Comparte con la comunidad aquellos recursos que te hayan sido de utilidad en el pasado.</p>
      </div>
      <div class="thumbs">
        <i class="far fa-thumbs-up"></i>
        <h3>Vota</h3>
        <p>Si un recurso te ha sido de ayuda, votalo! para que los mejores recursos tengan mayor visibilidad.</p>
      </div>
      <div class="comments">
        <i class="fas fa-comments"></i>
        <h3>Comenta</h3>
        <p>Comparte tus impresiones y experiencias respecto al recurso, o tema tratado.</p>
      </div>
    </section>
    <footer>
      Open Source Weekends es una comunidad de gente apasionada por la tecnología.
      Nos reunimos un sábado al mes en Campus Madrid, donde organizamos talleres y workshops, y colaboramos en proyectos de código abierto a través de nuestos <a href="http://osweekends.com/guilds.osweekends.com/" target="_blank">Guilds</a>
      Tanto si tienes años de experiencia desarrollando como si acabas de empezar, en OSWeekends hay un sitio para ti
      &copy;2018 — Made with by guilders.
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.container{
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
  justify-items: center;
}
.textPresent{
  width: 80%;
}
h1{
  text-align: center;
  margin-bottom: 10px;
  font-size: 32px;
}
.textPresent{
  line-height: 26px;
}
.textExplication{
  display: flex;
  flex-direction: columns;
  width: 80%;
  text-align: center;
}
.fa-share, .fa-thumbs-up, .fa-comments{
  font-size: 100px;
  color: #0059f2;
}
.textExplication p{
  width: 80%;
  margin: 0 auto;
}
footer{
  width: 80%;
  text-align: center;
}
</style>

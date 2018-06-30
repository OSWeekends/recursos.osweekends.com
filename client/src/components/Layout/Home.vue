<template>
  <div class="container">
    <section class="textPresent">
      <h2>Proyecto</h2>
      <p>Open Source Weekends somos un grupo de personas que nos gustan hablar de hacer cosas y hacerlas. Por ello en nuestro canal de Slack, al cabo del día, se comparten muchos recursos muy interesantes. Pero Slack los borra y no todo el puedo puede acceder en cualquier momento a ellos. Por eso nace este proyecto, queremos que esos recursos queden guardados y que cualquier persona que desee pueda acceder a ellos. Ademas conoceras quien lo ha compartido, una de las partes que consideramos fundamentales es compartir y aprender unos de otros</p>
    </section>
    <section class="textExplication">
      <h3>Comparte</h3>
      <p>Comparte con la comunidad aquellos recursos que te hayan sido de utilidad en el pasado.</p>
      <h3>Vota</h3>
      <p>Si un recurso te ha sido de ayuda, votalo! para que los mejores recursos tengan mayor visibilidad.</p>
      <h3>Comenta</h3>
      <p>Comparte tus impresiones y experiencias respecto al recurso, o tema tratado.</p>
    </section>
    <section class="icons">
      <p>eeeeeeee</p>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
</style>

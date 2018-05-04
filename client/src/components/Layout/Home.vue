<template>
  <div>
   <div class="indigo lighten-5">
    <div class="container ">
      <div class="section no-pad-bot">
        <div class="row">
          <div class="col s12 center">
            <h2 class="header center grey-text text-darken-3">Proyecto Recursos</h2>
            <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
          </div>
        </div>
      </div>
    </div>
   </div>

    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons medium">swap_horiz</i></h2>
              <h5 class="center">Comparte</h5>
              <p class="light">Comparte con la comunidad aquellos recursos que te hayan sido de utilidad en el pasado. </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons medium">thumb_up</i></h2>
              <h5 class="center">Vota</h5>
              <p class="light"> Si un recurso te ha sido de ayuda, votalo! para que los mejores recursos tengan mayor visibilidad. </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons medium">subject</i></h2>
              <h5 class="center">Comenta</h5>
              <p class="light"> Comparte tus impresiones y experiencias respecto al recurso, o tema tratado.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="page-footer grey darken-3">
     <div class="container">
      <div class="row">
        <div class="col l12 s12">
          <h5 class="grey-text text-lighten-4">Open Source Weekends</h5>
          <p class="grey-text text-lighten-3">Open Source Weekends es una comunidad de gente apasionada por la tecnología.
          Nos reunimos un sábado al mes en Campus Madrid, donde organizamos talleres y workshops, y colaboramos en proyectos de código abierto a través de nuestos <a href="http://osweekends.com/guilds.osweekends.com/">Guilds</a>
          Tanto si tienes años de experiencia desarrollando como si acabas de empezar, en OSWeekends hay un sitio para ti</p>
        </div>
      </div>
     </div>
     <div class="footer-copyright">
          <div class="container center footer-icons">
            <a href="https://www.meetup.com/es/Open-Source-Weekends/" target="_blank"><i class="fab fa-meetup fa-2x"></i></a>
            <a href="https://github.com/osweekends" target="_blank"><i class="fab fa-github fa-2x"></i></a>
            <a href="https://twitter.com/os_weekends" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.facebook.com/osweekends/" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a>
            <a href="https://medium.com/osweekends" target="_blank"><i class="fab fa-medium-m fa-2x"></i></a>
            <a href="http://invitations-osweekends.herokuapp.com/" target="_blank"><i class="fab fa-slack-hash fa-2x"></i></a>
          </div>
        </div>
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer-icons i{
  color: #909090;
  margin: 0 5px;
}

.footer-icons i:hover {
  color: #eee;
}
</style>

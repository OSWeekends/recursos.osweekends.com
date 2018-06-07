<template>
  <div>
    <v-container fluid class="indigo lighten-5">
      <v-container>
        <v-layout row>
          <v-flex class="text-xs-center">
            <h2 class="header center grey-text text-darken-3">Proyecto Recursos</h2>
            <p class="left-align light">Open Source Weekends somos un grupo de personas que nos gustan hablar de hacer cosas y hacerlas. Por ello en nuestro canal de Slack, al cabo del día, se comparten muchos recursos muy interesantes. Pero Slack los borra y no todo el puedo puede acceder en cualquier momento a ellos. Por eso nace este proyecto, queremos que esos recursos queden guardados y que cualquier persona que desee pueda acceder a ellos. Ademas conoceras quien lo ha compartido, una de las partes que consideramos fundamentales es compartir y aprender unos de otros</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <v-container fluid>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md4 class="text-xs-center">
            <v-icon size="80px">swap_horiz</v-icon>
            <h3>Comparte</h3>
            <p>Comparte con la comunidad aquellos recursos que te hayan sido de utilidad en el pasado. </p>
          </v-flex>
          <v-flex xs12 md4 class="text-xs-center">
            <v-icon size="80px">thumb_up</v-icon>
            <h3>Vota</h3>
            <p>Si un recurso te ha sido de ayuda, votalo! para que los mejores recursos tengan mayor visibilidad. </p>
          </v-flex>
          <v-flex xs12 md4 class="text-xs-center">
            <v-icon size="80px">subject</v-icon>
            <h3>Comenta</h3>
            <p>Comparte tus impresiones y experiencias respecto al recurso, o tema tratado. </p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
     <v-footer height="auto" class="grey darken-3">
        <v-container>
          <v-card flat tile class="grey darken-3 white--text text-xs-center">
            <v-card-text>
              <v-btn href="https://www.meetup.com/es/Open-Source-Weekends/" target="_blank" icon class="mx-3 white--text">
                <v-icon size="24px">fab fa-meetup</v-icon>
              </v-btn>
              <v-btn href="https://github.com/osweekends" target="_blank" icon class="mx-3 white--text">
                <v-icon size="24px">fab fa-github</v-icon>
              </v-btn>
              <v-btn href="https://twitter.com/os_weekends" target="_blank" icon class="mx-3 white--text">
                <v-icon size="24px">fab fa-twitter</v-icon>
              </v-btn>
              <v-btn href="https://www.facebook.com/osweekends/"  target="_blank" icon class="mx-3 white--text">
                <v-icon size="24px">fab fa-facebook-f</v-icon>
              </v-btn>
              <v-btn href="https://medium.com/osweekends" target="_blank" icon class="mx-3 white--text">
                <v-icon size="24px">fab fa-medium-m</v-icon>
              </v-btn>
              <v-btn href="http://invitations-osweekends.herokuapp.com/" target="_blank" icon class="mx-3 white--text">
                <v-icon size="24px">fab fa-slack-hash</v-icon>
              </v-btn>
            </v-card-text>
            <v-card-text class="white--text pt-0">
              Open Source Weekends es una comunidad de gente apasionada por la tecnología.
              Nos reunimos un sábado al mes en Campus Madrid, donde organizamos talleres y workshops, y colaboramos en proyectos de código abierto a través de nuestos <a href="http://osweekends.com/guilds.osweekends.com/" target="_blank">Guilds</a>
              Tanto si tienes años de experiencia desarrollando como si acabas de empezar, en OSWeekends hay un sitio para ti          </v-card-text>
            <v-card-text class="white--text">
              &copy;2018 — Made with <v-icon small class="white--text mr-1 ml-1">fas fa-heart</v-icon> by guilders.
            </v-card-text>
          </v-card>
        </v-container>
      </v-footer>
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

</style>

<template>
    <div>
        <link href='https://fonts.googleapis.com/css?family=Press+Start+2P&subset=latin-ext' rel='stylesheet' type='text/css'>
        <p>oops!!!<br/><span class="bigger flickering">404</span></p>
        <p id="info">Pagina no encontrada.<a href= "/">Go Home!!!</a></p>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
p {
  font-family: 'Press Start 2P', cursive;
  margin-left:auto;
  margin-top:150px;
  margin-right:auto;
  font-size:80px;
  text-align:center;
  margin-bottom:0px;
  color: #003da5;
  text-shadow: 0px 0px 1000px #003da5;
        filter: drop-shadow(color=#003da5, offx=0, offy=0);
}

.flickering {
  animation: flickering 0.9s;
  -webkit-animation: flickering 0.88s;
  color:white;
  animation-iteration-count:infinite;
}

.bigger
{
  font-size:135px;
}

@keyframes flickering
{
0% {text-shadow: 0px 0px 15px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
10% {text-shadow: 0px 0px 0px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:black;}
20% {text-shadow: 0px 0px 8px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:#003da5}
30% {text-shadow: 0px 0px 10px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
40% {text-shadow: 0px 0px 0px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:black;}
50% {text-shadow: 0px 0px 10px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
52% {text-shadow: 0px 0px 20px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
55% {text-shadow: 0px 0px 5px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:#003da5;}
60% {text-shadow: 0px 0px 5px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
75% {text-shadow: 0px 0px 0px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:black;}
85% {text-shadow: 0px 0px 5px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:#003da5;}
100% {text-shadow: 0px 0px 10px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
    color:white;
  }
}

@-webkit-keyframes flickering
{
0% {text-shadow: 0px 0px 15px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
10% {text-shadow: 0px 0px 0px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:black;}
20% {text-shadow: 0px 0px 8px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:#4ec7ff;}
30% {text-shadow: 0px 0px 10px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
40% {text-shadow: 0px 0px 0px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:black;}
50% {text-shadow: 0px 0px 10px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
52% {text-shadow: 0px 0px 20px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
55% {text-shadow: 0px 0px 5px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:#4ec7ff;}
60% {text-shadow: 0px 0px 5px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:white;}
75% {text-shadow: 0px 0px 0px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:black;}
85% {text-shadow: 0px 0px 5px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
  color:#4ec7ff;}
100% {text-shadow: 0px 0px 10px #003da5;
        filter: dropshadow(color=#003da5, offx=0, offy=0);
    color:white;
  }
}

#info {
  margin-top:20px;
  color:#003da5;
  font-size:14px;
}
a{
    text-decoration: none;
    color:#003da5;
}
</style>

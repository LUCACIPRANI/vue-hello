// configurazione vue
Vue.config.devtools = true;

// Exercise:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
  el: "#root",
  data: {
    name: "Luigi",
    surname: "",
    nationality: "Brasilian",
    city: "Sao Paolo",
    colorClass: 'red',
    image: "../img/background.jpeg",
  },
});


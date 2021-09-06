// configurazione vue
Vue.config.devtools = true;

// Exercise:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
  el: "#root",
  data: {
    name: "Joe",
    surname: "Manzi",
    nationality: "American",
    city: "Sea",
    image:
      "https://c.wallhere.com/photos/83/01/1500x1000_px_cliff_clouds_island_landscape_Limestone_mountain_nature-1105377.jpg!d",
    colorClass: "red",
    year: 2015,
  },
  methods: {
    changeColor() {
      this.colorClass == "red"
        ? (this.colorClass = "black")
        : (this.colorClass = "red");
    },
    incrementYear() {
      this.year++;
      this.changeColor();
      if (this.year > 2016 && this.year < 2021) {
        this.image =
          "https://images2.alphacoders.com/175/thumb-1920-175712.jpg";
        this.city = "Berlin";
      } else if (this.year > 2021) {
        this.image = "../img/image1.jpeg";
        this.city = "New York";
      } else {
        this.image =
          "https://images5.alphacoders.com/686/thumb-1920-686000.jpg";
      }
    },
    reduceYear() {
      this.year--;
      this.changeColor();
      if (this.year < 2015 && this.year > 2012) {
        this.image =
          "https://wallpaperstock.net/mist-mountains-waterfall-trees-wallpapers_40043_1920x1200.jpg";
        this.city = "Waterfall";
      } else if (this.year <= 2012) {
        this.image = "https://wallpaperaccess.com/full/3138856.jpg";
        this.city = "Shanghai";
        this.nationality = "Asian";
      }
    },
  },
});

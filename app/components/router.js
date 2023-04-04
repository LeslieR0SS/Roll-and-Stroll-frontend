import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { BikeCard } from "./bikeCard.js";
import { Bike } from "./bike.js";
import { StoreCard } from "./storeCard.js";

const sections = {
  "/": loadHomeSection,
  "/stores": loadStoresSection,
  "/spa/store/": loadStoreBikesSection,
  "/spa/availables": loadAvailableBikesSection,
};

export async function Router() {
  const d = document;
  const $main = d.getElementById("main");

  // destructuring
  const { hash } = location;

  $main.innerHTML = null;

  if (hash in sections) {
    sections[hash]();
  } else {
    loadSelectedBikeSection();
  }

  // para ocultar el componente loader en todas las secciones una vez se haya cargado el contenido.
  d.querySelector(".loader").style.display = "none";

  function loadHomeSection() {
    ajax({
      url: api.BIKES,
      cbSuccess: (bikes) => {
        console.log(bikes);
        let html = "";
        bikes.forEach((bike) => (html += BikeCard(bike)));
        d.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
    });
    console.log(api.BIKE);
  }

  function loadStoresSection() {
    ajax({
      url: api.STORES,
      cbSuccess: (res) => {
        console.log(res);
        let html = "";
        const stores = res.stores;
        console.log(stores);
        stores.forEach((store) => (html += StoreCard(store)));
        d.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
      cbError: (error) => {
        console.error(error);
        $main.innerHTML = "<p>Error loading stores</p>";
      },
    });
  }

  function loadStoreBikesSection() {
    console.log(`${api.STORE_BIKES}/${localStorage.getItem("store-card")}/bikes`);
    ajax({
      url: `${api.STORE_BIKES}/${localStorage.getItem("store-card")}/bikes`,
      cbSuccess: (storeBikes) => {
        console.log(storeBikes);
        let html = "";
        storeBikes.forEach((storeBikes) => (html += BikeCard(storeBikes)));
        d.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
    });
  }

  function loadAvailableBikesSection() {
    console.log(`${api.BIKE_AVAILABLE}`);
    ajax({
      url: api.BIKE_AVAILABLE,
      cbSuccess: (bikes) => {
        console.log(bikes);
        let html = "";
        bikes.forEach((bike) => (html += BikeCard(bike)));
        d.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
    });
  }

  function loadSelectedBikeSection() {
    console.log(`${api.BIKE}/${localStorage.getItem("bike-id")}`);
    ajax({
      url: `${api.BIKE}/${localStorage.getItem("bike-id")}`,
      cbSuccess: (bike) => {
        console.log(bike);
        $main.innerHTML = Bike(bike);
      },
    });
  }
}

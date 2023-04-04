import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { BikeCard } from "./bikeCard.js";
import { Bike } from "./bike.js";
import { StoreCard } from "./storeCard.js";

export async function Router() {
  const d = document;
  const w = window;
  const mainEl = d.getElementById("main");

  // Destructuring
  const { hash } = location;
  console.log(hash);

  mainEl.innerHTML = "";

  const hideLoader = () => {
    d.querySelector(".loader").style.display = "none";
  };

  if (!hash || hash === "#/") {
    //$main.innerHTML = "<h2>Sección del Home</h2>";
    const handleSuccess = (bikes) => {
      console.log(bikes);
      const bikeCards = bikes.map((bike) => BikeCard(bike)).join("");
      hideLoader();
      mainEl.innerHTML = bikeCards;
    };

    await ajax({
      url: api.BIKES,
      cbSuccess: handleSuccess,
    });

    console.log(api.BIKE);
  } else if (hash.includes("#/stores")) {
    mainEl.innerHTML = "<h2>Sección de las tiendas</h2>";

    const handleSuccess = (res) => {
      console.log(res);
      const storeCards = res.stores.map((store) => StoreCard(store)).join("");
      hideLoader();
      mainEl.innerHTML = storeCards;
    };

    const handleError = (error) => {
      console.error(error);
      mainEl.innerHTML = "<p>Error loading stores</p>";
    };

    await ajax({
      url: api.STORES,
      cbSuccess: handleSuccess,
      cbError: handleError,
    });
  } else if (hash.includes("#/spa/store/")) {
    //Aquí falla!!
    console.log(
      `${api.STORE_BIKES}/${localStorage.getItem("store-card")}/bikes`
    );

    const handleSuccess = (storeBikes) => {
      console.log(storeBikes);
      const bikeCards = storeBikes.map((bike) => BikeCard(bike)).join("");
      hideLoader();
      mainEl.innerHTML = bikeCards;
    };

    await ajax({
      url: `${api.STORE_BIKES}/${localStorage.getItem("store-card")}/bikes`,
      cbSuccess: handleSuccess,
    });
  } else if (hash.includes("#/spa/availables")) {
    mainEl.innerHTML = "<h2>Sección de Bicis disponibles </h2>";
    console.log(api.BIKE_AVAILABLE);

    const handleSuccess = (bikes) => {
      console.log(bikes);
      const bikeCards = bikes.map((bike) => BikeCard(bike)).join("");
      hideLoader();
      mainEl.innerHTML = bikeCards;
    };

    await ajax({
      url: api.BIKE_AVAILABLE,
      cbSuccess: handleSuccess,
    });
  } else {
    /*$main.innerHTML = 
        "<h2>Aquí cargará el contenido de la bici seleccionada</h2>";*/
    console.log(`${api.BIKE}/${localStorage.getItem("bike-id")}`);

    const handleSuccess = (bike) => {
      console.log(bike);
      mainEl.innerHTML = Bike(bike);
    };

    await ajax({
      url: `${api.BIKE}/${localStorage.getItem("bike-id")}`,
      cbSuccess: handleSuccess,
    });
  }
}

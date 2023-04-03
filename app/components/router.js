import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { BikeCard } from "./bikeCard.js";
import { Bike } from "./bike.js";
import { StoreCard } from "./storeCard.js";

export async function Router () {
    const d  = document;
    const w = window;
    const $main = d.getElementById("main");


    // destructuring
    let { hash } = location;
    console.log(hash);

    $main.innerHTML = null;

    if(!hash || hash === "#/"){
        //$main.innerHTML = "<h2>Sección del Home</h2>";
        await ajax({
            url:api.BIKES,
            cbSuccess:(bikes) => {
                console.log(bikes);
                let html = "";
                bikes.forEach((bike) => (html += BikeCard(bike)));
                d.querySelector(".loader").style.display="none"; 
                $main.innerHTML = html;
            },
        });
        console.log(api.BIKE)
    } else if (hash.includes("#/stores")){
        $main.innerHTML = "<h2>Sección de las tiendas</h2>";
        await ajax({
            url:api.STORES,
            //cbSuccess: (hello) => console.log(hello)
            cbSuccess:(res) => {
                console.log(res);
                let html = "";
                const stores = res.stores;
                console.log(stores);
                stores.forEach((store) => (html += StoreCard(store)));
                d.querySelector(".loader").style.display="none"; 
                $main.innerHTML = html;
            },
            cbError: (error) => {
                console.error(error);
                $main.innerHTML = "<p>Error loading stores</p>";
            },
            })

    } else if (hash === "#/crud"){
        $main.innerHTML = "<h2>Sección del form del CRUD</h2>";
    } else if (hash === "#/available"){
        $main.innerHTML = "<h2>Sección de Bicis disponibles </h2>";

    }else{
/*      $main.innerHTML = 
        "<h2>Aquí cargará el contenido de la bici seleccionada</h2>"; */
        console.log(`${api.BIKE}/${localStorage.getItem("bike-id")}`);
        await ajax({
            url:`${api.BIKE}/${localStorage.getItem("bike-id")}`,
            cbSuccess:(bike) => {
                console.log(bike);  
                $main.innerHTML= Bike(bike);
            },
        });
    }
    
    // para ocultar el componente loader en todas las secciones una vez se haya cargado el contenido.
    d.querySelector(".loader").style.display = "none";


}
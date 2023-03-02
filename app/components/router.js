import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { BikeCard } from "./bikeCard.js";
import { Bike } from "./bike.js";

export async function Router () {
    const d  = document;
    const w = window;
    const $bikes = d.getElementById("bikes");


    // destructuring
    let { hash } = location;
    console.log(hash);

    $bikes.innerHTML = null;

    if(!hash || hash === "#/"){
        //$bikes.innerHTML = "<h2>Sección del Home</h2>";
        await ajax({
            url:api.BIKES,
            cbSuccess:(bikes) => {
                console.log(bikes);
                let html = "";
                bikes.forEach((bike) => (html += BikeCard(bike)));
                d.querySelector(".loader").style.display="none"; 
                $bikes.innerHTML = html;
            },
        });
        console.log(api.BIKE)
    } else if (hash.includes("#/search")){
        $bikes.innerHTML = "<h2>Sección del Buscador</h2>";
    } else if (hash === "#/crud"){
        $bikes.innerHTML = "<h2>Sección del form del CRUD</h2>";
    }else{
/*      $bikes.innerHTML = 
        "<h2>Aquí cargará el contenido de la bici seleccionada</h2>"; */
        console.log(`${api.BIKE}/${localStorage.getItem("bike-id")}`);
        await ajax({
            url:`${api.BIKE}/${localStorage.getItem("bike-id")}`,
            cbSuccess:(bike) => {
                console.log(bike);
                $bikes.innerHTML= Bike(bike);
            },
        });
    }
    
    // para ocultar el componente loader    
    d.querySelector(".loader").style.display = "none";


}
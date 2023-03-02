import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { BikeCard } from "./bikeCard.js";

export function Router () {
    const d  = document;
    const w = window;
    const $bikes = d.getElementById("bikes");


    // destructuring
    let { hash } = location;
    console.log(hash);

    $bikes.innerHTML = null;

    if(!hash || hash === "#/"){
        //$bikes.innerHTML = "<h2>Sección del Home</h2>";
        ajax({
            url:api.BIKES,
            cbSuccess:(bikes) => {
                //console.log(bikes);
                let html = "";
                bikes.forEach((bike) => (html += BikeCard(bike)));
                d.querySelector(".loader").style.display="none"; 
                $bikes.innerHTML = html;
            },
        });
    } else if (hash.includes("#/search")){
        $bikes.innerHTML = "<h2>Sección del Buscador</h2>";
    } else if (hash === "#/crud"){
        $bikes.innerHTML = "<h2>Sección del form del CRUD</h2>";
    }else{
        $bikes.innerHTML = "<h2>Aquí cargará el contenido de las bicis seleccionadas</h2>"
    }


}
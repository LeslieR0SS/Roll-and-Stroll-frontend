/* import api from "./helpers/api.js";
import {ajax} from "./helpers/ajax.js"; */

/* UI - componentes */
import { Header } from "./components/header.js";
import { Loader } from "./components/loader.js";
import { Main } from "./components/main.js";
//import { BikeCard } from "./components/bikeCard.js";
import { Router } from "./components/router.js";
//import { SearchForm } from "./components/searchForm.js";
import { Stores } from "./components/stores.js";

/* Creamos el componente principal */
export function App(){
    const $root = document.getElementById("root"); //variable que hacer referencia al root del DOM

    //para evitar que el header se sobrecargue al navegar
    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
    $root.appendChild(Stores());
    Router();

/*     ajax({
        url:api.BIKES,
        cbSuccess:(bikes) => {
            console.log(bikes);
            let html = "";
            bikes.forEach((bike) => (html += BikeCard(bike)));
            d.querySelector(".loader").style.display="none"; 
            d.getElementById("bikes").innerHTML = html;
        },
    }); */


/*     document.getElementById("root").innerHTML = '<h1>Wellcome to Roll & Stroll SPA</h1>';

    console.log(api);

    ajax({
        url: api.BIKES,
        cbSuccess: (bikes) =>  {
            console.log(bikes);
        }
    });

    ajax({
        url: api.API_HELLO,
        cbSuccess: (hello) => console.log(hello)
    }) */
};
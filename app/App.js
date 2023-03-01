import api from "./helpers/api.js";
import {ajax} from "./helpers/ajax.js";

/* UI - componentes */
import { Header } from "./components/header.js";
import { Loader } from "./components/loader.js";
import { Bikes } from "./components/bikes.js";
import { BikeCard } from "./components/bikeCard.js";

/* Creamos el componente principal */
export function App(){
    const d = document,
    $root = d.getElementById("root"); //variable que hacer referencia al root del DOM

    $root.appendChild(Header());
    $root.appendChild(Bikes());

    $root.appendChild(Loader());

    ajax({
        url:api.BIKES,
        cbSuccess:(bikes) => {
            console.log(bikes);
            let html = "";
            bikes.forEach((bike) => (html += BikeCard(bike)));
            d.querySelector(".loader").style.display="none"; 
            d.getElementById("bikes").innerHTML = html;
        },
    });


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
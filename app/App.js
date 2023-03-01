import api from "./helpers/api.js";
import {ajax} from "./helpers/ajax.js";

/* componentes */
import { Title } from "./components/title.js";

/* Creamos el componente principal */
export function App(){
    const d = document,
    $root = d.getElementById("root"); //variable que hacer referencia al root del DOM

    $root.appendChild(Title());
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

/* UI - componentes */
import { Header } from "./components/header.js";
import { Loader } from "./components/loader.js";
import { Main } from "./components/main.js";
import { Router } from "./components/router.js";


/* Creamos el componente principal */
export function App(){
    const $root = document.getElementById("root"); //variable que hacer referencia al root del DOM

    //para evitar que el header se sobrecargue al navegar
    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();


};
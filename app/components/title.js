import api from "../helpers/api.js";

export function Title () {
    //Declaración y creación de la variable que contiene el nodo del elemento del DOM h1
    const $h1 = document.createElement("h1");
    $h1.innerHTML = `
    <a href = "${api.DOMAIN}" target= "_blank" rel="noopener class = title">
    ${api.NAME.toUpperCase()}
    </a>
    `;

    return $h1;
}
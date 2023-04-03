import {App} from "./App.js";


//Cuando cargue todo el contonido del DOM de la página, insertamo en el DOM nuebstro objeto App
document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);
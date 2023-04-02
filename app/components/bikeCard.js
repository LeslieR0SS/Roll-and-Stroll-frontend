import api from "../helpers/api.js";

export function BikeCard (props){
// destructuring
let {modelo, marca, precio,id,img} = props;
/*1. Para guardar el ID de la bici en el locaStorage, crearemos un evento. En el cual contralaremos si no existe un enlace dentro de bikes 
devolverá false y dejará de ejecutarse. En cambio, si existe el enlace lo guardamos y seteamos el valor en localStorage*/
document.addEventListener("click", (link)=>{
    if(!link.target.matches(".bike-card a")) return false;
    localStorage.setItem("bike-id", link.target.dataset.id);
});

let bikeUrl = modelo.replace(" ", "-");
console.log(bikeUrl)

/* 2.En enlace de cada bicicleta añadimos un atributo (data-id) para almacenar en el local-storage
el id de la bici obtenida para así luego realizar un GET con ese id que hemos guardado */
return `
    <div class ="bike-card" >
    <img src="${img}" alt=" ">
    <h2 class ="modelo">${modelo}</h2>
    <p class = "marca">${marca}</p>
    <p class = "precio">
        ${precio} €     
        <a href="#/spa/bike/${bikeUrl}" data-id="${id}">Ver Bici</a>
    </p>
    </div>
    `;
}
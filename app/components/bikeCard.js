import api from "../helpers/api.js";

export function BikeCard (props){
// destructuring
let {modelo, marca, precio} = props;
let {id,img} = props;

return `
    <div class ="bike-card" >
    <img src="${img}" alt=" ">
    <h2 class ="modelo">${modelo}</h2>
    <p class = "marca">${marca}</p>
    <p class = "precio">
        ${precio} €     
        <a href="#/spa/bike/${modelo}">Ver Bici</a>
    </p>
    </div>
    `;
}
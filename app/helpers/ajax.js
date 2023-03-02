// React inspo || función para tratar y procesar de una manera más rápida todos las peticiones asíncronas
export async function ajax (props){
// Desestructración 
let {url, method, headers, cbSuccess} = props;

await fetch(url)
// si la respuesta es 200 lo convertimos a json. Si no lo rechazamos con el mñetodo "Promise.reject". Ya Fetch trabaja con promesas
    .then(res => res.ok? res.json() : Promise.reject(res))
// En caso de éxito
    .then(json => cbSuccess(json))
// En caso de error
    .catch(err => {
        let message = err.statusText || "Error al acceder a la API";

        document.getElementById("bikes").innerHTML = `
        <div class = "error">
            <p>Error ${err.status}: ${message}</p>
        </div>
        `;

        // para ocultar el componente loader    
        document.querySelector(".loader").style.display = "none"; 

        console.log(err);
    });

}
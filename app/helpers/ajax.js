// React inspo || función para tratar y procesar de una manera más rápida todos las peticiones asíncronas
export function ajax (props){
// Desestructración 
let {url, method, headers, cbSuccess} = props;

fetch(url)
// si la respuesta es 200 lo convertimos a json. Si no lo rechazamos con el mñetodo "Promise.reject". Ya Fetch trabaja con promesas
    .then(res => res.ok? res.json() : Promise.reject(res))
// En caso de éxito
    .then(json => cbSuccess(json))
// En caso de error
    .catch(err => {
        let message = err.statusText || "Error al acceder a la API";

        document.getElementById("root").innerHTML = `
        <div class = "error">
            <p>Error ${err.status}: ${message}</p>
        </div>
        `;

        console.log(err);
    });

}
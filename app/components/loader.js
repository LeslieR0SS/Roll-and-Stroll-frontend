export function Loader (){
    const $loader = document.createElement("img");
    $loader.src = "app/assets/loader.svg";
    $loader.alt = "Cargando..."; //para texto alternativo del componente
    $loader.classList.add("loader"); //especificamos su clase

    return $loader;
}
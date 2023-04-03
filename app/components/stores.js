export function Stores () {
  const $stores = document.createElement("section");
  $stores.id = "stores";
  $stores.classList.add("grid-fluid"); 
  return $stores;
    /* const $form = document.createElement("form"),
    $select = document.createElement("select");

    $form.classList.add("search-form");
    $select.name = "search";
    $select.placeholder = "Filter by Stores...";

    // Creamos las opciones de filtrado
    const option1 = document.createElement("option");
    option1.value = "bikesAvailable";
    option1.text = "Bikes availsssssle";
    option1.setAttribute = ("href", "#/available")


    const option2 = document.createElement("option");
    option2.value = "option2";
    option2.text = "Option 2";

    // Creamos la opción por defecto
    const placeholder = document.createElement("option");
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.text = "Selecciona una opción";
    
    // Añadimos las opciones de filtrado al select
    $select.add(option1);
    $select.add(option2);
    $select.add(placeholder);
    

    $form.appendChild($select);
    return $form; */
}
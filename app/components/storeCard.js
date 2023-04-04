
export function StoreCard(props){
    let {nombre, localización, img, id} = props;

    document.addEventListener("click", (link)=>{
        if(!link.target.matches(".store-card a")) return false;
        localStorage.setItem("store-card", link.target.dataset.id);
    });
    
    let storeUrl = nombre.replace(/\s+/g, "-");
    console.log(storeUrl)

    

    return `
    <div class="store-card">
        <img src="${img}" alt="store-logo" id="store-logo">
        <h2 class="store-name">${nombre}</h2>
        <p class="store-location">${localización}</p>
        <a href="#/spa/store/${storeUrl}" data-id="${id}">Ver Bicicletas</a>

    </div>
    `;
}
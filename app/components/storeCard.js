
export function StoreCard(props){
    let {nombre, localización, img} = props;


/*     let storeUrl = modelo.replace(" ", "-");
    console.log(storeUrl) */
    

    return `
    <div class="store-card">
        <img src="${img}" alt="store-logo" id="store-logo">
        <h2 class="store-name">${nombre}</h2>
        <p class="store-location">${localización}</p>

    </div>
    `;
}
export function Bike (props) {
    const propsJsonObject = props[0];
    let { modelo,marca, precio, tipo, tipo_freno, horquilla, tipo_suspension, color, material_cuadro,
        talla,recorrido_suspension_trasera, marca_motor,tamaño_rueda, sexo, img} = propsJsonObject;
    console.log(propsJsonObject);
/*     let jsonArray = props;
    let propsJsonObject = jsonArray [0];
    console.log(propsJsonObject)

    let {modelo} = propsJsonObject; */

return `
    <section class = "bike-page">
        <aside> 
            <h3 class ="marca-subtitle">${marca}</h3>
            <h2 class = "modelo-title">${modelo}</h2>
        </aside>
        <img src="${img}" alt="${modelo}-${marca}" class= "bike-img">
        <hr>
        <article>
        <h3>Details</h3>
        <table class="bike-details">
            <tr>
                <th>Modelo:</th>
                <td>${modelo}</td>
            </tr>
            <tr>
                <th>Marca:</th>
                <td>${marca}</td>
            </tr>
            <tr>
        <th>Precio:</th>
        <td>${precio}</td>
        </tr>
        <tr>
            <th>Tipo:</th>
            <td>${tipo}</td>
        </tr>
        <tr>
            <th>Tipo de freno:</th>
            <td>${tipo_freno}</td>
            </tr>
        <tr>
            <th>Horquilla:</th>
            <td>${horquilla}</td>
        </tr>
        <tr>
            <th>Tipo de suspensión:</th>
            <td>${tipo_suspension}</td>
        </tr>
        <tr>
            <th>Color:</th>
            <td>${color}</td>
        </tr>
        <tr>
            <th>Material del cuadro:</th>
            <td>${material_cuadro}</td>
        </tr>
        <tr>
            <th>Talla:</th>
            <td>${talla}</td>
        </tr>
        <tr>
            <th>Recorrido de la suspensión trasera:</th>
            <td>${recorrido_suspension_trasera}</td>
        </tr>
        <tr>
            <th>Marca del motor:</th>
            <td>${marca_motor}</td>
        </tr>
        <tr>
            <th>Tamaño de la rueda:</td>
            <td>${tamaño_rueda}</td>
        </tr>
        <tr>
            <th>Sexo:</th>
            <td>${sexo}</td>
        </tr>
</table>


        
        </article>
    </section>
    `;
}
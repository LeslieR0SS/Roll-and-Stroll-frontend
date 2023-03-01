

const NAME = "roll-and-stroll",
    DOMAIN = `http://${NAME}.com`,
    // referencia a nuestra API
    BASE_URL = `http://localhost:3000`,
    API_HELLO = `${BASE_URL}/api/hola`,
    BIKES = `${BASE_URL}/api/bike`,
    BIKE = `${BASE_URL}/bike/:id`;


/* ECMAScript 6 nos permite simplificar su exportación si el nombre 
del parámetro es igual al nombre dónde está guardado la variable */
export default {
    NAME,
    DOMAIN,
    BASE_URL,
    API_HELLO,
    BIKES,
    BIKE
}
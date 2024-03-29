const NAME = "Roll & Stroll",
    DOMAIN = `http://127.0.0.1:5500`,

    // referencia a nuestra API
    BASE_URL = `https://roll-and-stroll-api.herokuapp.com`,
    API_HELLO = `${BASE_URL}/api/hola`,
    BIKES = `${BASE_URL}/api/bike`,
    BIKE = `${BASE_URL}/api/bike`,
    BIKE_AVAILABLE = `${BASE_URL}/api/bike/available`,
    STORES = `${BASE_URL}/api/stores`,
    STORE_BIKES = `${BASE_URL}/api/stores`,
    STORE = `${BASE_URL}/stores/:id`;



/* ECMAScript 6 nos permite simplificar su exportación si el nombre 
del parámetro es igual al nombre dónde está guardado la variable */
export default {
    NAME,
    DOMAIN,
    BASE_URL,
    API_HELLO,
    BIKES,
    BIKE,
    BIKE_AVAILABLE,
    STORES,
    STORE_BIKES,
    STORE
};
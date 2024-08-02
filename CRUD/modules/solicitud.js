import { URL } from "../config.js";

const peticion = async (url) => {
    let respuesta = await fetch(`${URL}/${url}`);
    let datos = await respuesta.json();
    return datos;
};

export default peticion;
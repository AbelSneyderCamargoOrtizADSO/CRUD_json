// ORDEN: importaciones - variables - metodos addevent 
import { validCampos, validDoc, validTel } from "./modules/modulo.js";
import mostrarDatos from "./modules/mostrarDatos.js";
import { enviarDatos } from "./modules/enviarDatos.js";
import { eliminarDatos } from "./modules/eliminarDatos.js";
import { soloNumeros, soloLetras } from "./modules/validPress.js";
 


// VARIABLES
let form = document.getElementById("form")
let btnEnviar = document.getElementById("btnEnviar")

let nextId = 1;
let nombre = document.getElementById("name")
let apellido = document.getElementById("lastname")
let documento = document.getElementById("documento")
let telefono = document.getElementById("tel")
let tyc = document.getElementById("terminos")

const select = document.getElementById('tipo_doc');

let correo = document.getElementById("email")
let direccion = document.getElementById("direccion")

let idUsuEditar = null;
function editarId(id) {
  idUsuEditar = id;
}

// CARGAR TIPO DE DOCUMENTO
async function tipo_doc() {
  const response = await fetch('http://localhost:3000/tipo_doc');
  const data = await response.json();

  data.forEach(element => {
    const option = document.createElement('option');
    option.value = element.nombre;
    option.textContent = element.nombre;
    select.appendChild(option);
  });
}
tipo_doc();

tyc.addEventListener("change", function() {
  if (tyc.checked) {
      btnEnviar.disabled = false;
  } else {
      btnEnviar.disabled = true;
  }
});

// id.addEventListener("keypress", soloNumeros)
nombre.addEventListener("keypress", soloLetras)
apellido.addEventListener("keypress", soloLetras)
documento.addEventListener("keypress", soloNumeros)
telefono.addEventListener("keypress", soloNumeros)

telefono.addEventListener("input", () => validTel(telefono));
documento.addEventListener("input", () => validDoc(documento));

// MOSTRAR DATOS EN LA TABLA
mostrarDatos(nextId, nombre, apellido, telefono, documento, select, correo, direccion, editarId);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  validCampos(event, nombre, apellido, telefono, documento, select, correo, direccion, enviarDatos,  idUsuEditar, nextId)
  // editarId = null;
})
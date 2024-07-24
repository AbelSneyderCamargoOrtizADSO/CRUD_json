// ORDEN: importaciones - variables - metodos addevent 
import { validCampos, validDoc, validTel } from "./modules/modulo.js";
import mostrarDatos from "./modules/mostrarDatos.js";
import { enviarDatos } from "./modules/enviarDatos.js";
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

let editarId = null;


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
mostrarDatos()

form.addEventListener('submit', () => validCampos(nombre, apellido, telefono, documento, select, correo, direccion, enviarDatos,  editarId, nextId))


// ELIMINAR DATOS O USUARIO DE LA API 
/*
let eliminarrrrrrrrrr = document.querySelectorAll(".tbody > .eliminar")
console.log(eliminarrrrrrrrrr)

eliminarrrrrrrrrr.forEach((eli) => {
  eli.addEventListener("click", () => {
    console.log("fesfesf")
  })
})

if (eliminar != null) {
  eliminar.addEventListener("click", () => console.log("drgdrgrg"))
}
*/
const eliminarDatos = async (id) => {
  await fetch(`http://localhost:3000/user/${id}`, {
    method: 'DELETE'
  });
  mostrarDatos();
}
  
// CARGAR DATOS PARA EDICION
async function cargarDatos(id){
  const response = await fetch(`http://localhost:3000/user/${id}`);
  const data = await response.json();

  editarId = id;
  // document.getElementById("id").value = data.id;
  document.getElementById("name").value = data.nombre;
  document.getElementById("lastname").value = data.apellido;
  document.getElementById("documento").value = data.documento;
  document.getElementById("tipo_doc").value = data.tipo_doc;
  document.getElementById("email").value = data.correo;
  document.getElementById("direccion").value = data.direccion;
}

// cargarDatos(5);
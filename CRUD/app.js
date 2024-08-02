// ORDEN: importaciones - variables - metodos addevent 
import { validCampos, validDoc, validTel, validText} from "./modules/modulo.js";
import mostrarDatos from "./modules/mostrarDatos.js";
import { enviarDatos } from "./modules/enviarDatos.js";
import { eliminarDatos } from "./modules/eliminarDatos.js";
import { soloNumeros, soloLetras } from "./modules/validPress.js";
import  peticion  from "./modules/solicitud.js";

 


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
// data.forEach(element => {
//   const option = document.createElement('option');
//   option.value = element.nombre;
//   option.textContent = element.nombre;
//   select.appendChild(option);
// });


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

telefono.addEventListener("blur", () => validTel(telefono));
documento.addEventListener("blur", () => validDoc(documento));
nombre.addEventListener("blur", () => {
  let tipo = "Nombre";
  validText(nombre, tipo, 0)
});
apellido.addEventListener("blur", () => {
  let tipo = "Apellido";
  validText(apellido, tipo, 1)
});



// MOSTRAR DATOS EN LA TABLA
mostrarDatos(nextId, nombre, apellido, telefono, documento, select, correo, direccion, editarId);

form.addEventListener('submit', (event, form) => {
  validCampos(event, form, nombre, apellido, telefono, documento, select, correo, direccion, enviarDatos,  idUsuEditar, nextId)
  // editarId = null;
})

addEventListener("DOMContentLoaded", (event) =>{
  // MOSTRAR TIPO DE DOCUMENTO
  peticion("tipo_doc").then(data => {
    const fragmento = document.createDocumentFragment();
    data.forEach(element => {
      const option = document.createElement('option');
      option.value = element.nombre;
      option.textContent = element.nombre;
      fragmento.appendChild(option);
    });
    select.appendChild(fragmento);
  })

  // MOSTRAR USUARIOS
  peticion("user").then( data => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    data.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${user.id}</td>
        <td>${user.nombre}</td>
        <td>${user.apellido}</td>
        <td>${user.telefono}</td>
        <td>${user.tipo_doc}</td>
        <td>${user.documento}</td>
        <td>${user.correo}</td>
        <td>${user.direccion}</td>
        <td>
          <button type="button" class="editar"><i class="bi bi-pencil-square"></i></button>
          <button type="button" id="eliminar" class="eliminar"><i class="bi bi-trash3"></i></button>
        </td>`;
  
      tbody.appendChild(tr);

      const editButton = tr.querySelector(".editar");
      editButton.addEventListener("click", () => {
        cargarDatos(user.id);
      });

      const eliminarBtn = tr.querySelector(".eliminar");
      eliminarBtn.addEventListener("click", () => {
        eliminarDatos(user.id, mostrarDatos);
      });
    });
  })

  // CARGAR DATOS PARA EDITAR
  function cargarDatos(id){
    peticion("user/"+id).then(data => {
      editarId(id); 
      nombre.value = data.nombre;
      apellido.value = data.apellido;
      telefono.value = data.telefono;
      documento.value = data.documento;
      tipo_doc.value = data.tipo_doc;
      correo.value = data.correo;
      direccion.value = data.direccion;
    })
  }


})
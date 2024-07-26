import { eliminarDatos } from './eliminarDatos.js';

export default async function mostrarDatos(nextId, nombre, apellido, telefono, documento, tipo_doc, correo, direccion, editarId) {
  const response = await fetch("http://localhost:3000/user");
  const data = await response.json();
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
      cargarDatos(user.id, nombre, apellido, telefono, documento, tipo_doc, correo, direccion, editarId);
    });

    const eliminarBtn = tr.querySelector(".eliminar");
    eliminarBtn.addEventListener("click", () => {
      eliminarDatos(user.id, mostrarDatos);
    });

  });

  // Actualizar nextId al mayor ID existente + 1
  if (data.length > 0) {
    nextId = Math.max(...data.map((user) => user.id)) + 1;
  }
}

// CARGAR DATOS PARA EDICION
export async function cargarDatos(id, nombre, apellido, telefono, documento, tipo_doc, correo, direccion, editarId){
  const response = await fetch(`http://localhost:3000/user/${id}`);
  const data = await response.json();

  editarId(id); 
  nombre.value = data.nombre;
  apellido.value = data.apellido;
  telefono.value = data.telefono;
  documento.value = data.documento;
  tipo_doc.value = data.tipo_doc;
  correo.value = data.correo;
  direccion.value = data.direccion;
}











/*
const mostrarDatos = async () => {
    const response = await fetch('http://localhost:3000/user')
    const data = await response.json()
    let tbody = document.getElementById("tbody")

    tbody.innerHTML = '';


    data.forEach((user) => {
        const tr = document.createElement('tr')
        tr.innerHTML =
        `<td>${user.id}</td>
        <td>${user.nombre}</td>
        <td>${user.apellido}</td>
        <td>${user.telefono}</td>
        <td>${user.tipo_doc}</td>
        <td>${user.documento}</td>
        <td>${user.correo}</td>
        <td>${user.direccion}</td>
        <td>
        <button type="button" onclick="cargarDatos(${user.id})" class="editar"><i class="bi bi-pencil-square"></i></button>
        <button type="button" onclick="eliminarDatos(${user.id})" class="eliminar"><i class="bi bi-trash3"></i></button>
        </td>`
        
        
        tbody.appendChild(tr)
    });

    // Actualizar nextId al mayor ID existente + 1
    if (data.length > 0) {
        nextId = Math.max(...data.map(user => user.id)) + 1;
    }
}
*/

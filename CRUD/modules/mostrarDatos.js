export default async function mostrarDatos(nextId) {
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
  });

  // Actualizar nextId al mayor ID existente + 1
  if (data.length > 0) {
    nextId = Math.max(...data.map((user) => user.id)) + 1;
  }
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

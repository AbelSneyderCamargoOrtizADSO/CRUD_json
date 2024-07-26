import mostrarDatos from './mostrarDatos.js';

export async function enviarDatos(nombre, apellido, documento, telefono, select, correo, direccion, idUsuEditar, nextId) {
  const data = {
    id: "",
    nombre: nombre.value,
    apellido: apellido.value,
    documento: documento.value,
    telefono: telefono.value,
    tipo_doc: select.value,
    correo: correo.value,
    direccion: direccion.value,
  };

  let url = "http://localhost:3000/user";
  let method = "POST";

  if (idUsuEditar) {
    url = `${url}/${idUsuEditar}`;
    method = "PUT";
    data.id = idUsuEditar.toString();
  } else {
    data.id = nextId.toString(); // Asignar el nuevo ID como cadena y luego incrementarlo
    nextId++;
  }

  await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  idUsuEditar = null;
  mostrarDatos(nextId, nombre, apellido, telefono, documento, select, correo, direccion);
}

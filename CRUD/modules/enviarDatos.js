// ENVIAR DATOS
export async function enviarDatos(nombre, apellido, documento, telefono, select, correo, direccion, editarId, nextId) {
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

  if (editarId) {
    url = `${url}/${editarId}`;
    method = "PUT";
    data.id = editarId.toString();
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

  editarId = null;
  mostrarDatos();
}

// VARIABLES
let form = document.getElementById("form")

let nextId = 1;
// let id = document.getElementById("id")
let nombre = document.getElementById("name")
let apellido = document.getElementById("lastname")
let documento = document.getElementById("documento")

const select = document.getElementById('tipo_doc');

let correo = document.getElementById("email")
let direccion = document.getElementById("direccion")

let editarId = null;

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

// VALIDACIONES
const soloNumeros = () => {
  if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
    return;
  }

  if (/[0-9]/.test(event.key)) {
    return
  }

  event.preventDefault();
}

const soloLetras = () => {
  if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
    return;
  }

  if (/[A-Za-z\s]/.test(event.key)) {
    return;
  }

  event.preventDefault();
}

// id.addEventListener("keydown", soloNumeros)
nombre.addEventListener("keydown", soloLetras)
apellido.addEventListener("keydown", soloLetras)
documento.addEventListener("keydown", soloNumeros)


// MOSTRAR DATOS EN LA TABLA
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
mostrarDatos()


// ENVIAR DATOS
async function enviarDatos() {
  const data = {
    id: "" ,
    nombre: nombre.value,
    apellido: apellido.value,
    documento: documento.value,
    tipo_doc: select.value,
    correo: correo.value,
    direccion: direccion.value
  }

  let url = 'http://localhost:3000/user';
  let method = 'POST';

  if (editarId) {
    url = `${url}/${editarId}`;
    method = 'PUT';
    data.id = editarId.toString();
  } else {
    data.id = nextId.toString(); // Asignar el nuevo ID como cadena y luego incrementarlo
    nextId++; 
  }

  await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data)
  });

  editarId = null;
  mostrarDatos();
}

form.addEventListener('submit', async (event) => {

  event.preventDefault();

  // if (id.value === '') {
  //   alert("COMPLETE EL CAMPO DE ID");
  //   return;
  // }

  if (nombre.value === '') {
    alert("COMPLETE EL CAMPO DE NOMBRE");
    return;
  }

  if (apellido.value === '') {
    alert("COMPLETE EL CAMPO DE APELLIDO");
    return;
  }

  if (documento.value === '') {
    alert("COMPLETE EL CAMPO DE DOCUMENTO");
    return;
  }

  if (select.value === '') {
    alert("SELECCIONE EL TIPO DE DOCUMENTO");
    return;
  }

  if (correo.value === '') {
    alert("COMPLETE EL CAMPO DE CORREO");
    return;
  }

  if (direccion.value === '') {
    alert("COMPLETE EL CAMPO DE DIRECCION");
    return;
  }
  
  await enviarDatos();
  form.reset();
})


// ELIMINAR DATOS O USUARIO DE LA API 
const eliminarDatos = async (id) => {
  await fetch(`http://localhost:3000/user/${id}`, {
    method: 'DELETE'
  });
  mostrarDatos();
}
  
// CARGAR DATOS PARA EDICION
const cargarDatos = async (id) => {
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
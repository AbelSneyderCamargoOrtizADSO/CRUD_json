// MODULARIZAR, OPTIMIZAR, HACER QUE CUANDO SE ENVIE APAREZCAN TODOS EN ROJO SI SE ENVA VACIO, HACER LAS VALIDACIONES DE CANTIDAD DE CARACTERES

export const validCampos = async (nombre, apellido, telefono, documento, select, correo, direccion, enviarDatos, editarId, nextId) => {

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

  if (telefono.value === '') {
    alert("COMPLETE EL CAMPO DE TELEFONO");
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

  // if (!/^[a-z]{3,}\@[a-z]{2,}\.[a-z]{2,}$/.test(correo)) {
  //   alert("INGRESE UN CORREO VALIDO");
  //   return;
  // }

  if (direccion.value === '') {
    alert("COMPLETE EL CAMPO DE DIRECCION");
    return;
  }
  
  await enviarDatos(nombre, apellido, documento, telefono, select, correo, direccion, editarId, nextId);
  form.reset();
}


let formGroups = document.querySelectorAll(".form__group");

let mensajeMostrado = false;
let mensajeEliminado = false;

let span = document.createElement("span");


export const validTel = (tel) => {
  if (tel.value.length < 8 || tel.value.length > 10) {
    span.textContent = "El telefono debe tener entre 8 y 10 numeros";
    tel.classList.add("error");
    tel.classList.remove("correcto");
    mensajeEliminado = false;
    if (!mensajeMostrado) {
      formGroups[2].appendChild(span);
      mensajeMostrado = true;
    }
  } else {
    tel.classList.add("correcto");
    tel.classList.remove("error");
    if (!mensajeEliminado && formGroups[2].contains(span)) {
      formGroups[2].removeChild(span);
      mensajeEliminado = true;
    }
    mensajeMostrado = false;
  }
};

export const validDoc = (doc) => {
  if (doc.value.length < 8 || doc.value.length > 10) {
    span.textContent = "El documento debe tener entre 8 y 10 caracteres";
    doc.classList.add("error");
    doc.classList.remove("correcto");
    mensajeEliminado = false;
    if (!mensajeMostrado) {
      formGroups[4].appendChild(span);
      mensajeMostrado = true;
    }
  } else {
    doc.classList.add("correcto");
    doc.classList.remove("error");
    if (!mensajeEliminado && formGroups[4].contains(span)) {
      formGroups[4].removeChild(span);
      mensajeEliminado = true;
    }
    mensajeMostrado = false;
  }
};



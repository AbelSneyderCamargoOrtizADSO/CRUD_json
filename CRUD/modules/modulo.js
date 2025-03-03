// MODULARIZAR, OPTIMIZAR, HACER QUE CUANDO SE ENVIE APAREZCAN TODOS EN ROJO SI SE ENVA VACIO, HACER LAS VALIDACIONES DE CANTIDAD DE CARACTERES


export const validCampos = async (event, form, nombre, apellido, telefono, documento, select, correo, direccion, enviarDatos, idUsuEditar, nextId) => {

  event.preventDefault();

  let valid = true;

  let requi = document.querySelectorAll("form [required]")
  requi.forEach(campo => {
    if (campo.value === "") {
      campo.classList.add("error")
      valid = false;
    }else{
      campo.classList.remove("error")
    }
  })

  /*
  let campos = [{nom: "Nombre", val: nombre.value}, {nom: "Apellido", val: apellido.value}, {nom: "Telefono", val: telefono.value}, {nom: "Tipo de documento", val: select.value}, {nom: "Numero de documento", val: documento.value}, {nom: "Correo electrónico", val: correo.value}, {nom: "Direccion residencial", val: direccion.value}];


  for (let campo of campos) {
    if (campo.val.trim() === '') {
      alert(`El campo ${campo.nom} NO puede estar vacio`);
      return;
    }
  }
  */

  if(valid){
    await enviarDatos(nombre, apellido, documento, telefono, select, correo, direccion, idUsuEditar, nextId);
    form.reset();
  }
  // console.log("ID del usuario para enviar:", idUsuEditar); 
}


let formGroups = document.querySelectorAll(".form__group");

let mensajeMostrado = false;
let mensajeEliminado = false;



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

export const validText = (variable, tipo, num) => {
  if (variable.value.length < 3 || variable.value.length > 40) {
    let span = document.createElement("span");
    span.textContent = `El ${tipo} debe tener entre 3 y 40 caracteres`;
    variable.classList.add("error");
    variable.classList.remove("correcto");
    mensajeEliminado = false;
    if (!mensajeMostrado) {
      formGroups[num].appendChild(span);
      mensajeMostrado = true;
    }
  } else {
    variable.classList.add("correcto");
    variable.classList.remove("error");
    if (!mensajeEliminado && formGroups[2].contains(span)) {
      formGroups[num].removeChild(span);
      mensajeEliminado = true;
    }
    mensajeMostrado = false;
  }
};


/*
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
*/


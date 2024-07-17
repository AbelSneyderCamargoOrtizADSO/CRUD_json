// MODULARIZAR, OPTIMIZAR, HACER QUE CUANDO SE ENVIE APAREZCAN TODOS EN ROJO SI SE ENVA VACIO, HACER LAS VALIDACIONES DE CANTIDAD DE CARACTERES

let formGroups = document.querySelectorAll(".form__group");

let mensajeMostrado = false;
let mensajeEliminado = false;

let span = document.createElement("span")

export const validDoc = () => {
  if (documento.value.length < 8 || documento.value.length > 10) {
    span.textContent = "El documento debe tener entre 8 y 10 caracteres"
    documento.classList.add("error");
    documento.classList.remove("correcto");
    mensajeEliminado = false;
    if (!mensajeMostrado) {
      formGroups[4].appendChild(span)
      mensajeMostrado = true; 
    }
    
  } else {
    documento.classList.add("correcto");
    documento.classList.remove("error");
    mensajeMostrado = false;
    if (!mensajeEliminado) {
      formGroups[4].removeChild(span)
      mensajeEliminado = true;
    }
  }
}

export const validTel = () => {
    if (telefono.value.length <= 10) {
        span.textContent = "El telefono debe tener entre 10 numeros"
        telefono.classList.add("error");
        telefono.classList.remove("correcto");
        mensajeEliminado = false;
        if (!mensajeMostrado) {
            formGroups[2].appendChild(span)
            mensajeMostrado = true; 
        }
    } else {
      telefono.classList.add("correcto");
      telefono.classList.remove("error");
      mensajeMostrado = false;
    if (!mensajeEliminado) {
      formGroups[2].removeChild(span)
      mensajeEliminado = true;
    }
    }
  }
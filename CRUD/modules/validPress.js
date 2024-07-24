// VALIDACIONES
export const soloNumeros = (event) => {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
        return;
    }

    if (/[0-9]/.test(event.key)) return;

    event.preventDefault();
}

export const soloLetras = (event) => {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
        return;
    }

    if (/[A-Za-zÁ-ÿ\s]/.test(event.key)) return;

    event.preventDefault();
}


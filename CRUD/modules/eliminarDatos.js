export async function eliminarDatos(id, mostrarDatos) {
    await fetch(`http://localhost:3000/user/${id}`, {
        method: 'DELETE'
    });
    mostrarDatos();
}
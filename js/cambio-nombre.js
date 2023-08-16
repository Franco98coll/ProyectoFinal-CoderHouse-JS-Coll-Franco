const urlParams = new URLSearchParams(window.location.search);
const NombreSeleccionado = urlParams.get('nombre');

let bienvenida = document.getElementById("bienvenido");
if (NombreSeleccionado !== null) {
    bienvenida.innerHTML = `Bienvenido ${NombreSeleccionado}!`;
}

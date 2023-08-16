
// Obtener el id del producto desde los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const idProductoSeleccionado = urlParams.get('id');


const productosJSON = localStorage.getItem('productos');
const productos = JSON.parse(productosJSON);
const productoSeleccionado = productos.find(producto => producto.id === parseInt(idProductoSeleccionado));

// Función para calcular el valor de cada cuota
function valorCuota(precio) {
    let cuota = precio / 6;
    return cuota.toFixed(2);
}

// Mostrar los detalles del producto en el HTML
if (productoSeleccionado) {
    const titulo = document.getElementById('titulo');
    titulo.innerHTML = `
        <h4>${productoSeleccionado.nombre}</h4>
        <p> ${productoSeleccionado.descripcion}</p>
    `;

    const precio = document.getElementById('precio');
    precio.innerHTML = `
        <h5>$${productoSeleccionado.precio}</h5>
        <p>6 cuotas sin interes de $${valorCuota(productoSeleccionado.precio)}</p>
    `;

    const fotoPrincipal = document.getElementById('foto-principal');
    fotoPrincipal.innerHTML = `
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
    `;

    const fotoCostado = document.getElementById('foto-costado');
    fotoCostado.innerHTML = `
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
    `;
} else {
    // Si el producto no se encontró, muestra un mensaje de error o redirige a una página de error.
    const detallesProducto = document.getElementById('detalles-producto');
    detallesProducto.innerHTML = '<p>Producto no encontrado.</p>';
}

let boton = document.getElementById("comprar");
boton.addEventListener("click", comprar);

function comprar() {
    swal({
        title: `¿Estás por comprar: ${productoSeleccionado.nombre}?`,
        text: `Una vez realizada la compra no se podrá cancelar. \n \n El precio es de $${productoSeleccionado.precio}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((compra) => {
        if (compra) {
            swal("Compra realizada con éxito", {
                icon: "success",
            });
        } else {
            swal("Compra cancelada");
        }
    })
}

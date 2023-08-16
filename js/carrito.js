const listaCarrito = document.getElementById('lista-carrito');
const carritoJSON = localStorage.getItem('carrito');
let carrito2 = JSON.parse(carritoJSON) || [];
const precioTotal = document.getElementById('precioTotal');

listaCarrito.innerHTML = ''; // Limpiamos el contenido anterior

function mostrarProductosEnCarrito() {
    listaCarrito.innerHTML = '';
    if (carrito2.length === 0) {
        listaCarrito.innerHTML = '<p>El carrito está vacío</p>';
        return;
    }
    carrito2.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto-carrito');

        div.innerHTML = `
            <div class="carrito-item">
                <div class="alinear-carrito">
                    <img src="${producto.imagen}" alt="">
                    <div class="carrito-info">
                        <h3>${producto.nombre}</h3>
                        <h5>$${producto.precio.toFixed(2)}</h5>
                    </div>
                </div>
                <div class="btn-carrito">
                    <button class="btn btn-danger btn-eliminar" data-id="${producto.id}">Eliminar</button>
                </div>
            </div>
        `;

        listaCarrito.appendChild(div);
    });
    if (carrito2.length > 0) {
        precioTotal.innerHTML = `Total Carrito: $${calcularPrecioTotal(carrito2).toFixed(2)}`;
    } if (carrito2.length === 0){
            
    }
}

function calcularPrecioTotal(carrito) {
    let precioTotal = 0;
    carrito.forEach(producto => {
        precioTotal += producto.precio;
    });
    return precioTotal;
}

function eliminarProductoDelCarrito(id) {
    carrito2 = carrito2.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito2));
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosEnCarrito();

    listaCarrito.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-eliminar')) {
            const productId = parseInt(event.target.dataset.id);
            eliminarProductoDelCarrito(productId);
            mostrarProductosEnCarrito();
        }
    });
});

let boton = document.getElementById("botonComprar");
boton.addEventListener("click", comprar);

function comprar() {
    let mensaje = "Estás por comprar los siguientes productos:\n\n";

    carrito2.forEach(producto => {
        mensaje += `${producto.nombre} - Precio: $${producto.precio.toFixed(2)}\n`;
    });
        mensaje += `\nTotal: $${calcularPrecioTotal(carrito2).toFixed(2)}`;

    swal({
        title: "¿Está seguro de realizar la compra?",
        text: mensaje,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((compra) => {
        if (compra) {
            swal("Compra realizada con éxito", {
                icon: "success",
            });
            listaCarrito.innerHTML = '';
        } else {
            swal("Compra cancelada");
        }
    });
}




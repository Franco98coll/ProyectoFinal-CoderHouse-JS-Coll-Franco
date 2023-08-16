const productos = document.querySelectorAll('.cartita');
productos.forEach(cartita => {
    cartita.addEventListener('click', () => {
    const idProductoSeleccionado = cartita.getAttribute('data-id');
    window.location.href = `producto.html?id=${idProductoSeleccionado}`;
});
});
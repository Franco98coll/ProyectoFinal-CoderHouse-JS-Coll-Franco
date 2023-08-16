const productos = document.querySelectorAll('.item');
productos.forEach(item => {
    item.addEventListener('click', () => {
    const idProductoSeleccionado = item.getAttribute('data-id');
    window.location.href = `producto.html?id=${idProductoSeleccionado}`;
});
});
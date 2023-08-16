const listaProductos = document.getElementById('lista-productos');

    // Realizar una petición Fetch para obtener los productos
    fetch('./inventario.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            const liProducto = document.createElement('li');
            liProducto.innerHTML = `
            ${producto.nombre}
            Precio Unitario: $${producto.precio.toFixed(2)}
        `;
            listaProductos.appendChild(liProducto);
        });
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });
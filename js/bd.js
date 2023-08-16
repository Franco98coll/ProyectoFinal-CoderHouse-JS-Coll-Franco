
// Verifica si ya existe una variable 'productos' antes de declararla
if (!localStorage.getItem('productos')) {
    // Si no existe, crea la lista de productos y guárdala en el Local Storage
    const productos = [
        { id: 1, nombre: "Adidas Superstar", precio: 95000, descripcion: "Las Adidas Superstar siguen siendo el símbolo de la autenticidad y el estilo urbano. Con el respaldo de décadas de historia, estas zapatillas han evolucionado para seguir siendo relevantes en la moda contemporánea.", imagen: "./img/925899-800-auto.webp",imagenRojo: "./img/zapatillas/as-rojo.avif",imagenAzul: "./img/zapatillas/as-azul.avif",imagenBlanco: "./img/925899-800-auto.webp",imagenNegro: "./img/zapatillas/as-negro.avif",cuota: valorCuota()},

        { id: 2, nombre: "Nike Air Force 1", precio: 100000, descripcion: "¡Descubre la leyenda de las zapatillas Nike Air Force 1! Desde su debut en 1982, estas icónicas zapatillas han dominado el mundo del calzado urbano con su estilo atemporal y su inconfundible diseño.", imagen: "./img/zapatillas//nike_air_force_107__1631632268_a51d73e0_progressive.jpg",imagenRojo: "./img/zapatillas/a1-rojo.webp",imagenAzul: "./img/zapatillas/a1-azul.webp",imagenBlanco: "./img/zapatillas//nike_air_force_107__1631632268_a51d73e0_progressive.jpg",imagenNegro: "./img/zapatillas/a1-negro.webp",cuota: valorCuota() },

        { id: 3, nombre: "DC Pure", precio: 50000, descripcion: "Las zapatillas DC Pure son un clásico de la marca. Con un diseño simple y minimalista, estas zapatillas son ideales para el skate y para el día a día.", imagen: "./img/zapatillas/zapatos-moda-zapatillas.webp",imagenRojo: "./img/zapatillas/dc-rojo.webp",imagenAzul: "./img/zapatillas/dc-azul.webp",imagenBlanco: "./img/zapatillas/dc-blanco.webp",imagenNegro: "./img/zapatillas/zapatos-moda-zapatillas.webp",cuota: valorCuota() },

        { id: 4, nombre: "Nike Dunk Low", precio: 70000, descripcion: "Las Nike Dunk Low destacan por su diseño clásico y versátil. Con una silueta de corte bajo, combinan la elegancia con la esencia rebelde del skateboarding, permitiéndote lucir un look auténtico en cualquier ocasión.", imagen: "./img/zapatillas/dunk-negro.jpg",imagenRojo: "./img/zapatillas/dunk-rojo.webp",imagenAzul: "./img/zapatillas/dunk-azul.jpg",imagenBlanco: "./img/zapatillas/dunk-blanco.jpg",imagenNegro: "./img/zapatillas/dunk-negro.jpg",cuota: valorCuota() },

        { id: 5, nombre: "Adidas Run 70s", precio: 60000, descripcion: "Las Adidas Run 70s son unas zapatillas de estilo urbano con un diseño inspirado en el running. Su exterior de malla transpirable y su suela de goma las convierten en unas zapatillas cómodas y versátiles.", imagen: "./img/zapatillas/Zapatillas_Run_70s_Negro_GX3090_01_standard.avif", imagenRojo: "./img/zapatillas/70-rojo.avif",imagenAzul: "./img/zapatillas/70-azul.avif",imagenBlanco: "./img/zapatillas/70-blanco.avif",imagenNegro: "./img/zapatillas/Zapatillas_Run_70s_Negro_GX3090_01_standard.avif",cuota: valorCuota() },

        { id: 6, nombre: "Converse Net Star Ox", precio: 40000, descripcion: "¡Descubre la autenticidad y el estilo de las zapatillas Converse Net Star Ox! Un diseño atemporal que ha perdurado a lo largo de los años, convirtiéndose en el favorito de skaters y amantes de la moda urbana." , imagen: "./img/zapatillas/converse-rojo.jpg",imagenRojo: "./img/zapatillas/converse-rojo.jpg",imagenAzul: "./img/zapatillas/converse-azul.jpg",imagenBlanco: "./img/zapatillas/converse-blanco.jpg",imagenNegro: "./img/zapatillas/converse-negro.jpg", cuota: valorCuota() },

        { id: 7, nombre: "Nike AirMax", precio: 58000, descripcion: "¡Descubre el icónico calzado Nike Air Max! Con una combinación única de estilo y tecnología de amortiguación, estas zapatillas han dejado una huella duradera en la moda y el rendimiento deportivo." ,imagen: "./img/zapatillas/nike-airmax.jpg", imagenRojo: "./img/zapatillas/airmax-rojo.jpg",imagenAzul: "./img/zapatillas/airmax-azul.jpg",imagenBlanco: "./img/zapatillas/airmax-blanco.jpg",imagenNegro: "./img/zapatillas/nike-airmax.jpg",  cuota: valorCuota()},

        { id: 8, nombre: "Nike Air Jordan 1", precio: 90000, descripcion: "Las Nike Jordan 1 fueron lanzadas por primera vez en 1985 y rápidamente se convirtieron en un fenómeno. Diseñadas para el legendario Michael Jordan, estas zapatillas revolucionaron el mundo del calzado deportivo y se convirtieron en el punto de partida de la icónica línea de zapatillas Air Jordan." ,imagen: "./img/zapatillas/jordan.webp",imagenRojo: "./img/zapatillas/jordan.webp",imagenAzul: "./img/zapatillas/jordan-azul.webp",imagenBlanco: "./img/zapatillas/jordan-blanco.webp",imagenNegro: "./img/zapatillas/jordan-negro.jpg", cuota: valorCuota()},

        { id: 9, nombre: "Nike AirMax 90", precio: 60000, descripcion: "Las Nike Air Max 90 presentan un estilo retro y elegante que combina detalles clásicos con toques modernos. Su diseño de líneas aerodinámicas y su variedad de colores y materiales permiten encontrar el par perfecto para reflejar tu personalidad y estilo." ,imagen: "./img/zapatillas/airmax90.jpg", imagenRojo: "./img/zapatillas/airmax90-rojo.webp",imagenAzul: "./img/zapatillas/arimax90-azul.jpg",imagenBlanco: "./img/zapatillas/airmax90.jpg",imagenNegro: "./img/zapatillas/airmax90-negro.jpg", cuota: valorCuota()},

        { id: 10, nombre: "Adidas DNA x LEGO", precio: 40000, descripcion: "¡Descubre la colaboración épica entre Adidas y LEGO con las zapatillas Adidas DNA x LEGO! Un emocionante encuentro entre la moda urbana y la diversión creativa de LEGO." ,imagen: "./img/zapatillas/Zapatillas_adidas_DNA_x_LEGOr_Two-Strap_Hook-and-Loop_Amarillo_HQ1308_01_standard.avif",imagenRojo: "./img/zapatillas/Zapatillas_adidas_DNA_x_LEGOr_Two-Strap_Hook-and-Loop_Amarillo_HQ1308_01_standard.avif",imagenAzul: "./img/zapatillas/Zapatillas_adidas_DNA_x_LEGOr_Two-Strap_Hook-and-Loop_Amarillo_HQ1308_01_standard.avif",imagenBlanco: "./img/zapatillas/Zapatillas_adidas_DNA_x_LEGOr_Two-Strap_Hook-and-Loop_Amarillo_HQ1308_01_standard.avif",imagenNegro: "./img/zapatillas/Zapatillas_adidas_DNA_x_LEGOr_Two-Strap_Hook-and-Loop_Amarillo_HQ1308_01_standard.avif",  cuota: valorCuota()},

        { id: 11, nombre: "Adidas Forum Mid", precio: 57000, descripcion: "Las Adidas Forum Mid presentan un diseño retro que ha sido modernizado para satisfacer las demandas de la moda actual. Con su corte medio y detalles distintivos, estas zapatillas destacan en la multitud y te permiten lucir un look auténtico y sofisticado." ,imagen: "./img/zapatillas/Zapatillas_Forum_Mid_Blanco_FY4976_01_standard.avif", imagenRojo: "./img/zapatillas/forum-rojo.avif",imagenAzul: "./img/zapatillas/Zapatillas_Forum_Mid_Blanco_FY4976_01_standard.avif",imagenBlanco: "./img/zapatillas/forum-blanco.avif",imagenNegro: "./img/zapatillas/forum-negro.avif", cuota: valorCuota()},

        { id: 12, nombre: "Adidas Adizero SL", precio: 120000, descripcion: "Las Adidas Adizero SL presentan un diseño ligero y aerodinámico que te permite moverte con agilidad y velocidad. La construcción de alta tecnología se combina con materiales de primera calidad para brindarte una experiencia de carrera incomparable." ,imagen: "./img/zapatillas/adizer-rojo.avif", imagenRojo: "./img/zapatillas/adizer-rojo.avif",imagenAzul: "./img/zapatillas/adizero-azul.avif",imagenBlanco: "./img/zapatillas/adizero-blanco.avif",imagenNegro: "./img/zapatillas/adizero-negro.avif", cuota: valorCuota()},
        
    ];
    
    const productosJSON = JSON.stringify(productos);
    localStorage.setItem('productos', productosJSON);
}

function valorCuota(precio) {
    let cuota = precio / 6;
    return cuota.toFixed(2);
}
//carrito
const carrito = [];

function agregarAlCarrito(producto) {
    const carritoJSON = localStorage.getItem('carrito');
    const carrito = JSON.parse(carritoJSON) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
const botonAgregarCarrito = document.getElementById('agregar-al-carrito');
botonAgregarCarrito.addEventListener('click', () => {
agregarAlCarrito(productoSeleccionado);
Toastify({

    text: "Producto Agregado al Carrito",
    style: {
        background: "linear-gradient(to right, #941F1F, #CE6B5D)",
    },
    duration: 2000
    }).showToast();;
});


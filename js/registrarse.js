let boton = document.getElementById("btn-registrarse");
boton.addEventListener("click", agregarUsuario);

class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
}

function agregarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;

    const usuario = new Usuario(nombre, email, contraseña);

    guardarUsuario(usuario)
        .then(() => {
            document.getElementById("formulario").reset();
            Toastify({
                text: "usuario registrado correctamente",
                style: {
                    background: "linear-gradient(to right, #941F1F, #CE6B5D)",
                },
                duration: 2000
                }).showToast();;;;
        })
        .catch(error => {
            Toastify({
                text: "Error al registrar usuario",
                style: {
                    background: "linear-gradient(to right, #941F1F, #CE6B5D)",
                },
                duration: 2000
                }).showToast();;;;
        });
}

function guardarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        try {
            let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || {};
            usuariosGuardados[usuario.email] = usuario;
            localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
            console.log(usuariosGuardados);
            resolve(); 
        } catch (error) {
            reject(error); 
        }
    });
}

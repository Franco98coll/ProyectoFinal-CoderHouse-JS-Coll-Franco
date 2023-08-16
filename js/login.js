let btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", loginUsuario);

function loginUsuario(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;
    let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));
    

    if (usuariosGuardados && usuariosGuardados[email]) {
        if (usuariosGuardados[email].contraseña === contraseña) {
            if (usuariosGuardados[email].nombre === "admin") {
                window.location.href = `./inventario.html?nombre=${usuariosGuardados[email].nombre}`;
            } else {
                window.location.href = `./index.html?nombre=${usuariosGuardados[email].nombre}`;
            }
        } else {
            Toastify({
                text: "Contraseña incorrecta",
                style: {
                    background: "linear-gradient(to right, #941F1F, #CE6B5D)",
                },
                duration: 2000
                }).showToast();;;
        }
    } else {
        Toastify({
            text: "El usuario no existe",
            style: {
                background: "linear-gradient(to right, #941F1F, #CE6B5D)",
            },
            duration: 2000
            }).showToast();;;
    }
}


let mg = document.getElementsByClassName("bi");

for (let i = 0; i < mg.length; i++) {
mg[i].addEventListener('click', toggleLike);
}

function toggleLike(event) {
let elemento = event.target;
elemento.classList.toggle('mg-rojo');
elemento.textContent = elemento.classList.contains('mg-rojo') ? 'No me gusta' : 'Me gusta';
}

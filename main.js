const navMobile = document.querySelector('.icono-menu');
const contenedorMobile = document.querySelector('.contenedor-mobile');

navMobile.addEventListener('click', toggleContenedorMobile);

function toggleContenedorMobile() {
    console.log('Click');
    contenedorMobile.classList.toggle('inactive');
}


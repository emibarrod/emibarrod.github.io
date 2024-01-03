// Función para mostrar/ocultar la navbar en dispositivos móviles
document.getElementById('toggle-btn').addEventListener('click', function () {
    var nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
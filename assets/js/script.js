const titulos = document.querySelectorAll('.title');

titulos.forEach((elemento) => {
    elemento.addEventListener('click', function() {
        const texto = this.nextElementSibling;
        texto.classList.toggle('tex');
    });
});

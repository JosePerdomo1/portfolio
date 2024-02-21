//Funcionalidad para poder bajar suavemente al seleccionar un elemento del nav 
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    //pequeño easter egg para que cuando se presione la foto del juan garay aparezca
    // la vaca (cowsayjs) para decir una frase muy utilizada en clase
    document.getElementById('foto-juan-garay').addEventListener('click', function () {
        let cowsayContainer = document.getElementById('cowsay-container');
        let mensaje = '<pre>\n' +
            ' _______________\n' +
            '< ME DESPLIEGO!>\n' +
            ' ---------------\n' +
            '        \\   ^__^\n' +
            '         \\  (oo)\\_______\n' +
            '            (__)\\       )\\/\\\n' +
            '                ||----w |\n' +
            '                ||     ||\n' +
            '</pre>';
        cowsayContainer.innerHTML = '<pre>' + mensaje + '</pre>';
    });
});
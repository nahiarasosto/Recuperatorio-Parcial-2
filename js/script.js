/*ACLARACIÓN: tuve un problema que al ejecutar un evento 
la consola mostraba error porque intentaba leer al mismo tiempo eventos pertenecientes a otras páginas del sitio
Usar if fue la mejor solución que encontré
*/

// DATOS CURIOSOS

let datosCuriosos = [
    'Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.',
    'Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.',
    'Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.',
    'Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.',
    'Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.',
    'Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.',
    'Publicó libros fundamentales sobre programación creativa como Processing: A Programming Handbook for Visual Designers and Artists.',
    'Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA (Universidad de California, Los Ángeles).',
    'Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.',
    'Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series.'
];

let botonDatosCuriosos = document.querySelector('#botonCurioso');
let pantallaDatosCuriosos = document.querySelector('.bloqueCurioso');


if (botonDatosCuriosos && pantallaDatosCuriosos) {
    botonDatosCuriosos.addEventListener('click', function () {

        let indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
        
        let resultado = datosCuriosos[indiceAleatorio];
        
        pantallaDatosCuriosos.innerHTML = resultado;
    
    });
}

// INFO.HTML

// GALERÍA DE OBRAS

let galeria = document.querySelector('.galeriaDeObras');
let botonGaleria = document.querySelector('#botonGaleria');

if (galeria && botonGaleria) {

    // GALERÍA INICIAL

    galeria.innerHTML =
        '<div class="obra"><img src="../img/reas-1.jpg" alt="Imagen de la serie Still Life, 2016">' +
        '<p>Still life, 2016</p></div>' +
        '<div class="obra"><img src="../img/reas-4.jpg" alt="Imagen de la obra CSRSNT-MRIE-24-OF-32.PNG, 2025">' +
        '<p>CSRSNT-MRIE-24-OF-32.PNG, 2025</p></div>' +
        '<div class="obra"><img src="../img/reas-2.jpg" alt="Imagen de la serie Path, 2001">' +
        '<p>Path, 2001</p></div>' +
        '<div class="obra"><img src="../img/reas-5.jpg" alt="Imagen de la obra CENTURY-XXX-METAJUDD, 2025">' +
        '<p>CENTURY-XXX-METAJUDD, 2025</p></div>' +
        '<div class="obra"><img src="../img/reas-6.jpg" alt="Imagen de la obra Study for a Garden of Earthly Delights, No. 4, 2018">' +
        '<p>Study for a Garden of Earthly Delights, No. 4, 2018</p></div>';

    // CAMBIA LAS OBRAS DE LA GALERÍA AL HACER CLICK

    botonGaleria.addEventListener('click', function () {
        galeria.innerHTML =
            '<div class="obra"><img src="../img/reas-3.jpg" alt="Imagen de la serie Still Life, 2016">' +
            '<p>Still life, 2016</p></div>' +
            '<div class="obra"><img src="../img/reas-7.jpg" alt="Imagen de la obra DETAIL OF PROCESS 13 from PRocess compendium, 2010">' +
            '<p>DETAIL OF PROCESS 13 from PRocess compendium, 2010</p></div>' +
            '<div class="obra"><img src="../img/reas-8.jpg" alt="Imagen de la obra Still from atoms, 2023">' +
            '<p>Still from atoms, 2023</p></div>' +
            '<div class="obra"><img src="../img/reas-9.jpg" alt="Imagen de la obra Microimage A-06, 2002">' +
            '<p>Microimage A-06, 2002</p></div>' +
            '<div class="obra"><img src="../img/reas-10.jpg" alt="Imagen de la serie Details of process, 2005">' +
            '<p>Details of process, 2005</p></div>';
    });
}


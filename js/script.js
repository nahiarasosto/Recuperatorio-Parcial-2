/*ACLARACIÓN: tuve un problema que al ejecutar un evento 
la consola mostraba error porque intentaba leer al mismo tiempo eventos pertenecientes a otras páginas del sitio
Usar if fue la mejor solución que encontré
*/

//INDEX.HTML

// DATOS CURIOSOS
// EL ARRAY Y LOS ELEMENTOS PARA COMPROBAR SI ESTÁ O NO Y QUE NO HAYA ERROR EN LA CONSOLA

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

// OBRAS.HTML

// GALERÍA DE OBRAS
// LA GALERÍA PARA COMPROBAR SI ESTÁ O NO Y QUE NO HAYA ERROR EN LA CONSOLA

let galeria = document.querySelector('.galeriaDeObras');
let botonGaleria = document.querySelector('#botonGaleria');

if (galeria && botonGaleria) {

    // GALERÍA INICIAL

    // RENDERIZADO INICIAL DE LA GALERÍA
galeria.innerHTML = 
  '<div class="obra"><img src="./img/reas-1.jpg" alt="Imagen de la serie Still Life, 2016">' + 
  '<p>Still life, 2016</p></div>' + 
  '<div class="obra"><img src="./img/reas-4.jpg" alt="Imagen de la obra CSRSNT-MRIE-24-OF-32.PNG, 2025">' + 
  '<p>CSRSNT-MRIE-24-OF-32.PNG, 2025</p></div>' + 
  '<div class="obra"><img src="./img/reas-2.jpg" alt="Imagen de la serie Path, 2001">' + 
  '<p>Path, 2001</p></div>' + 
  '<div class="obra"><img src="./img/reas-5.jpg" alt="Imagen de la obra CENTURY-XXX-METAJUDD, 2025">' + 
  '<p>CENTURY-XXX-METAJUDD, 2025</p></div>' + 
  '<div class="obra"><img src="./img/reas-6.jpg" alt="Imagen de la obra Study for a Garden of Earthly Delights, No. 4, 2018">' + 
  '<p>Study for a Garden of Earthly Delights, No. 4, 2018</p></div>';

// CAMBIA LA GALERÍA AL HACER CLICK
botonGaleria.addEventListener('click', function () { 
  galeria.innerHTML = 
    '<div class="obra"><img src="./img/reas-3.jpg" alt="Imagen de la serie Still Life, 2016">' + 
    '<p>Still life, 2016</p></div>' + 
    '<div class="obra"><img src="./img/reas-7.jpg" alt="Imagen de la obra DETAIL OF PROCESS 13 from PRocess compendium, 2010">' + 
    '<p>DETAIL OF PROCESS 13 from PRocess compendium, 2010</p></div>' + 
    '<div class="obra"><img src="./img/reas-8.jpg" alt="Imagen de la obra Still from atoms, 2023">' + 
    '<p>Still from atoms, 2023</p></div>' + 
    '<div class="obra"><img src="./img/reas-9.jpg" alt="Imagen de la obra Microimage A-06, 2002">' + 
    '<p>Microimage A-06, 2002</p></div>' + 
    '<div class="obra"><img src="./img/reas-10.jpg" alt="Imagen de la serie Details of process, 2005">' + 
    '<p>Details of process, 2005</p></div>'; 
});
}

// INFO.HTML
// EL FORMULARIO PARA COMPROBAR SI ESTÁ O NO Y QUE NO HAYA ERROR EN LA CONSOLA

const form = document.querySelector('form');

if (form) {

    // MÁXIMO PARA CARGAR DATOS Y ARRAY PARA GUARDARLOS

const maximoInstalacion = 5;
const lista = [];

// CAPTURA DE LOS ELEMENTOS DEL FORMULARIO

const inputNombre = document.querySelector('#nombreInstalacion');
const inputPersonas = document.querySelector('#numeroPersonas');
const inputDias = document.querySelector('#numeroDias');
const inputHoras = document.querySelector('#numeroHoras');
const inputCobro = document.querySelector('#numeroCobro');

// CAPTURA DE LOS BOTONES Y LA SECCIÓN DE RESULTADOS

const botonEnviar = document.querySelector('#botonEnviar');
const botonReset = document.querySelector('#botonReset');
const botonResultados = document.querySelector('#botonResultados');
const seccionResultados = document.querySelector('#resultadosFormulario');

// EVENTO AL ENVIAR EL FORMULARIO

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // CONVERTIR LOS VALORES INGRESADOS A NÚMEROS

    let personas = Number(inputPersonas.value);
    let dias = Number(inputDias.value);
    let horas = Number(inputHoras.value);
    let cobro = Number(inputCobro.value);

    // CÁLCULO DEL COSTO POR DÍA

    let costoPorDia = personas * horas * cobro;

    lista.push({
        nombre: inputNombre.value,
        dias: dias,
        costoPorDia: costoPorDia,
        costoTotal: costoPorDia * dias
    });

    form.reset();

    // DESHABILITAR EL BOTÓN DE ENVIAR CUÁNDO SE ALCANCE EL LÍMITE

    if (lista.length === maximoInstalacion) {
        botonEnviar.disabled = true;
        alert('Haz alcanzado el límite de ingreso de instalaciones ¡Es hora de calcular los resultados!');
    }
});

// EVENTO PARA LOS RESULTADOS

botonResultados.addEventListener('click', () => {

    // VALIDACIÓN POR SI NO SE CARGARON DATOS

    if (lista.length === 0) {
        alert('Por favor ingresa datos antes de calcular los resultados.');
        return;
    }

    let costoUnDia = 0;
    let costoTotalEstudio = 0;
    let maxInstalacion = lista[0];

    // BUCLE PARA CALCULAR

    for (let i = 0; i < lista.length; i++) {
        let inst = lista[i];

        // COSTO DE UN DÍA

        costoUnDia += inst.costoPorDia;

        // COSTO TOTAL

        costoTotalEstudio += inst.costoTotal;

        // INSTALACIÓN CON MÁS DÍAS DE PRODUCCIÓN

        if (inst.dias > maxInstalacion.dias) {
            maxInstalacion = inst;
        }
    }


    // LAS MATEMÁTICAS

    let costo = Math.round(costoUnDia * 100) / 100;
    let costoMaxInstalacion = Math.round(maxInstalacion.costoTotal * 100) / 100;
    let porcentaje = Math.round((maxInstalacion.costoTotal / costoTotalEstudio) * 100);

    // INSERTA LOS RESULTADOS EN EL HTML

    seccionResultados.innerHTML =
        '<h3>Resultados:</h3>' +
        '<p><b>Costo total de un día de trabajo:</b> $' + costo + '</p>' +
        '<p><b>Instalación con más días de producción:</b> "' + maxInstalacion.nombre + '" (' + maxInstalacion.dias + ' días) - Costo: $' + costoMaxInstalacion + '</p>' +
        '<p><b>Porcentaje del costo total:</b> ' + porcentaje + '%</p>';

    seccionResultados.classList.remove('oculto');

    inputNombre.disabled = true;
    inputPersonas.disabled = true;
    inputDias.disabled = true;
    inputHoras.disabled = true;
    inputCobro.disabled = true;
    botonEnviar.disabled = true;
    botonResultados.disabled = true;
    botonReset.disabled = false;
    botonReset.classList.remove('oculto');
});

// EVENTO DEL BOTÓN DE REINICIO

botonReset.addEventListener('click', () => {

    lista.length = 0;
    seccionResultados.innerHTML = '';
    seccionResultados.classList.add('oculto');

    inputNombre.disabled = false;
    inputPersonas.disabled = false;
    inputDias.disabled = false;
    inputHoras.disabled = false;
    inputCobro.disabled = false;
    botonEnviar.disabled = false;

    form.reset();

    botonResultados.disabled = false;
    botonReset.disabled = true;
    botonReset.classList.add('oculto');
});
}
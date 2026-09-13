/* ACLARACIÓN: tuve un problema al ejecutar el sitio
que si el navegador veìa código pertenecienta a una página que no era en la que se estaba
salta error en la consola, usar if fue la mejor solución que encontré */

/* INDEX.HTML - DATOS CURIOSOS */

const datosCuriosos = [
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

const botonDatosCuriosos = document.querySelector('#botonCurioso');
const pantallaDatosCuriosos = document.querySelector('.bloqueCurioso');

if (botonDatosCuriosos && pantallaDatosCuriosos) {
    
    botonDatosCuriosos.addEventListener('click', () => {
        const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
        const resultado = datosCuriosos[indiceAleatorio];

        pantallaDatosCuriosos.innerHTML = resultado;
    });
}

/* OBRAS.HTML - GALERÍA DE OBRAS */

const galeria = document.querySelector('.galeriaDeObras');
const botonGaleria = document.querySelector('#botonGaleria');

if (galeria && botonGaleria) {

    // GALERÍA INICIAL
    
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
    
    botonGaleria.addEventListener('click', () => {
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

/* INFO.HTML - FORMULARIO */

const form = document.querySelector('form');

if (form) {
    
    const maximoInstalacion = 5;
    const lista = [];

    const inputNombre = document.querySelector('#nombreInstalacion');
    const inputPersonas = document.querySelector('#numeroPersonas');
    const inputDias = document.querySelector('#numeroDias');
    const inputHoras = document.querySelector('#numeroHoras');
    const inputCobro = document.querySelector('#numeroCobro');

    const botonEnviar = document.querySelector('#botonEnviar');
    const botonReset = document.querySelector('#botonReset');
    const botonResultados = document.querySelector('#botonResultados');
    const seccionResultados = document.querySelector('#resultadosFormulario');

    // EVENTO AL ENVIAR EL FORMULARIO
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const personas = Number(inputPersonas.value);
        const dias = Number(inputDias.value);
        const horas = Number(inputHoras.value);
        const cobro = Number(inputCobro.value);

        const costoPorDia = personas * horas * cobro;

        lista.push({
            nombre: inputNombre.value,
            dias: dias,
            costoPorDia: costoPorDia,
            costoTotal: costoPorDia * dias
        });

        form.reset();

        if (lista.length === maximoInstalacion) {
            botonEnviar.disabled = true;
            alert('Has alcanzado el límite de ingreso de instalaciones. ¡Es hora de calcular los resultados!');
        }
    });

    // EVENTO PARA CALCULAR LOS RESULTADOS
    
    botonResultados.addEventListener('click', () => {

        if (lista.length === 0) {
            alert('Por favor ingresa datos antes de calcular los resultados.');
            return;
        }

        let costoUnDia = 0;
        let costoTotalEstudio = 0;
        let maxInstalacion = lista[0];

        // BUCLE PARA CALCULAR
        
        for (let i = 0; i < lista.length; i++) {
            const inst = lista[i];

            costoUnDia += inst.costoPorDia;
            costoTotalEstudio += inst.costoTotal;

            if (inst.dias > maxInstalacion.dias) {
                maxInstalacion = inst;
            }
        }

        const costo = Math.round(costoUnDia * 100) / 100;
        const costoMaxInstalacion = Math.round(maxInstalacion.costoTotal * 100) / 100;
        const porcentaje = Math.round((maxInstalacion.costoTotal / costoTotalEstudio) * 100);

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

        botonResultados.disabled = false;
        botonReset.disabled = true;
        botonReset.classList.add('oculto');
    });
}


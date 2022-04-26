/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

/*
const grande = document.querySelector('.carrousel')
const punto = document.querySelectorAll('.punto')

//Cuando CLICK en cada punto
    //Saber la posición de ese punto
    //Aplicar un transform translateX al grande
    //Quitar la clase activo de todos los puntos
    //Añadir la clase activo al punto que hemos hecho click
punto.forEach((cadaPunto, i)=> {
    punto[0].classList.add( 'activo')
    //Asignamos un click a CadaPunto
    punto[i].addEventListener('click',()=>{
        //Cogemos la posicion y calculamos el espacio de desplazamiento
        let position = i
        let operacion = position * -(100/3)

        //Movemos el carrusel
        grande.style.transform = `translateX(${ operacion }%)`

        //Quitamos la clase a todos los puntos
        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove( 'activo')
        })

        //Añadimos la clase al punto pulsado
        punto[i].classList.add( 'activo')
    })
});*/

const imgDevErp = [
    'assets/imgEleJones/img1.png',
    'assets/imgEleJones/img2.png',
    'assets/imgEleJones/img3.png'
];

let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#img');

/**
     * Funcion que cambia la foto en la siguiente posicion
     */
 function pasarFoto() {
    if(posicionActual >= imgDevErp.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

/**
 * Funcion que cambia la foto en la anterior posicion
 */
function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = imgDevErp.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen () {
    $imagen.src = `${imgDevErp[posicionActual]}`;
}

 // Iniciar
 renderizarImagen();

 // Eventos
 $botonAvanzar.addEventListener('click', pasarFoto);
 $botonRetroceder.addEventListener('click', retrocederFoto);
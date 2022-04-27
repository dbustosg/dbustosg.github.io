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

let item,$imagen,posicionActual;

const imagenes = [
    //EleJones
    ['assets/imgEleJones/img1.png',
    'assets/imgEleJones/img2.png',
    'assets/imgEleJones/img3.png'],
    //DevErp
    ['assets/imgDevErp/img1.png',
    'assets/imgDevErp/img2.png',
    'assets/imgDevErp/img3.png',
    'assets/imgDevErp/img4.png']
];

function whoItem(numberItem){
    switch(numberItem){
        case 1:
            item = 0;
            $imagen = document.querySelector('#imgEleJones');
            break;
        case 2:
            item = 1;
            $imagen = document.querySelector('#imgDevErp');
            break;
    }
    posicionActual = 0;
    renderizarImagen();
}

/**
     * Funcion que cambia la foto en la siguiente posicion
     */
 function pasarFoto() {
    if(posicionActual >= imagenes[item].length - 1) {
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
        posicionActual = imagenes[item].length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen () {
    $imagen.src = `${imagenes[item][posicionActual]}`;
}

// Eventos
[...document.querySelectorAll('#avanzar')].forEach(btn => btn.addEventListener('click',pasarFoto));
[...document.querySelectorAll('#retroceder')].forEach(btn => btn.addEventListener('click',retrocederFoto));

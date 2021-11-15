$(function () {
    $('.nav-menu-movil img').on('click', function () {
        $('.nav-menu').slideToggle();
        $('.nav-menu-movil').toggleClass('presionado');
    });

    $('.career-names article').mouseover(function () { 
        console.log('Sobre carrera');
    });
    
    
    
});
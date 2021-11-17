$(function () {
    $('.nav-menu-movil img').on('click', function () {
        $('.nav-menu').slideToggle();
        $('.nav-menu-movil').toggleClass('presionado');
    });

    $('.career-names article').click(function () { 
        $('.information-career article').fadeOut();
        $().addClass('none');
        setTimeout(() => {
            var carrera = $(this).attr('class');      
        $('.' + carrera + '__container').fadeIn();
        }, 350);
        
    });
    
    
    
});
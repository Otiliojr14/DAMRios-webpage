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

    $('.careers__container-mobile article').click(function () {
        $(this).next("div.information-career").slideToggle().siblings("div.information-career").slideUp("slow");
        var arrowIcon = $(this).find('.career__icon img');
        if (arrowIcon.attr('src') === './assets/img/expand-arrow.png') {
            $('.career__icon img').attr({src: "./assets/img/expand-arrow.png", alt:"icono expandir"});
            $(this).find('.career__icon img').attr({src: "./assets/img/expand-arrow-open.png",
  alt:"Icono expandir abierto"});						
        } else {
            $(this).find('.career__icon img').attr({src: "./assets/img/expand-arrow.png",
  alt:"icono expandir"});
        }
    });
    
    
    
});
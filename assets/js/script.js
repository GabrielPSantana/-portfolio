$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    console.log('ok')
    if(scrollTop > 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
})

//document Ready

$(document).ready(function() {
    new Typed('#type-it', {
        strings: ['Engenheiro de Software', 'Programador de Sistemas', 'FullStack', 'Freelancer'],
        typeSpeed: 100,
        loop:true
      });
})
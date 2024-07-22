$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
})

//document Ready

$(document).ready(function() {
    new Typed('#type-it', {
        strings: ['Engenheiro de Software', 'Programador de Sistemas', 'Desenolvimento de sites', 'Freelancer'],
        typeSpeed: 100,
        loop:true
      });
})
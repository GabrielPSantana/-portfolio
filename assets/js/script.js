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
        strings: ['Engenheiro de Software', 'Programador de Sistemas', 'Desenvolvedor de sites', 'Freelancer'],
        typeSpeed: 100,
        loop:true
      });

      alert('Atenção: O site está em desenvolvimento. Whatsapp para contato: (75) 99943-7100 ');
})

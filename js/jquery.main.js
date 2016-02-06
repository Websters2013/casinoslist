$(function(){

    $('.btn-up').on({
        'click':function(){
            $('html, body').animate({scrollTop: 0}, 600);
        }

    });

    $(window).on({
        'scroll':function(){
            if($(window).scrollTop() > $(window).height()){
                $('.btn-up').fadeIn();
            } else {
                $('.btn-up').fadeOut();
            }
            if($(window).scrollTop() + $(window).height() > $('.site__footer').offset().top + 16) {
                $('.btn-up').css({ bottom: $(window).scrollTop() + $(window).height() - $('.site__footer').offset().bottom + 55 });
            } else {
                $('.btn-up').css({ bottom: '70px' });
            }
        }
    });

    $('.menu__btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
                $('menu__btn').removeClass('active_btn');

            } else {
                curElem.addClass('active');
                $('menu__btn').addClass('active_btn');
            }

        }
    });

    $( ".popular-last" ).click(function() {
        $( ".site__aside__popular ul li" ).css('display', 'block');
        $( ".popular-last").css('display', 'none');
        return false;
    });

} );

$(window).on({
    load: function () {
        
    }
});
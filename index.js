$(function(){
    $('.sp_barBox').on('click',function(){
        $('.bar_1').toggleClass('bar_1_after');
        $('.bar_2').toggleClass('bar_2_after');
        $('.bar_3').toggleClass('bar_3_after');
        $('.sp_menu').slideToggle();
    })
    $(window).on('scroll',function(){
        let scrollLength = $(this).scrollTop();
        // header underline start
        if(scrollLength>10){
            $('header').addClass('header_after');
        }else{
            $('header').removeClass('header_after');
        }
        // header underline end
    })
})
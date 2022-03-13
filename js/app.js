let screenHeigh = $(window).height();

$(window).scroll(function(){
    let currentPosition = $(this).scrollTop();
    if(currentPosition > screenHeigh -100){
        $(".site-nav").addClass("nav-scroll");
    }else{
        $(".site-nav").removeClass("nav-scroll");
    };
});

    
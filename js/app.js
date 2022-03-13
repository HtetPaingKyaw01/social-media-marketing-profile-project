let screenHeigh = $(window).height();

$(window).scroll(function(){
    let currentPosition = $(this).scrollTop();
    if(currentPosition > screenHeigh -100){
        $(".site-nav").addClass("nav-scroll");
    }else{
        $(".site-nav").removeClass("nav-scroll");
    };
});

$(".navbar-toggler").click(function(){
    if($(".menu-icon").hasClass("fa-bars")){
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    }else{
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
    }
});
    
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

var waypoints = $('#home').waypoint(function(direction) {
    console.log("a"); 
    $(".nav-link").removeClass("current-section");
    $(".nav-link[href='#home']").addClass("current-section");
  }, {
    offset: '25%'
});

var waypoints = $('#about').waypoint(function(direction) {
    console.log("b"); 
    $(".nav-link").removeClass("current-section");
    $(".nav-link[href='#about']").addClass("current-section");

  }, {
    offset: '25%'
});

var waypoints = $('#services').waypoint(function(direction) {
    console.log("c"); 
    $(".nav-link").removeClass("current-section");
    $(".nav-link[href='#services']").addClass("current-section");

  }, {
    offset: '25%'
});

var waypoints = $('#pricing').waypoint(function(direction) {
    console.log("d"); 
    $(".nav-link").removeClass("current-section");
    $(".nav-link[href='#pricing']").addClass("current-section");

  }, {
    offset: '25%'
});

var waypoints = $('#contact').waypoint(function(direction) {
    console.log("e"); 
    $(".nav-link").removeClass("current-section");
    $(".nav-link[href='#contact']").addClass("current-section");

  }, {
    offset: '25%'
});
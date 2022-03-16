let screenHeigh = $(window).height();

$(window).scroll(function(){
    let currentPosition = $(this).scrollTop();
    if(currentPosition > screenHeigh-100){
        $(".site-nav").addClass("nav-scroll");
    }else{
        $(".site-nav").removeClass("nav-scroll");
        setActive("home");
    };
});

$(".navbar-toggler").click(function(){
    if($(".menu-icon").hasClass("fa-bars")){
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    }else{
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
    }
});

function setActive(current){
    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass('current-section');
}

function navScroll(){
    let currentSection = $("section[id]");
    currentSection.waypoint(function(direction){
        if(direction == "down"){
            let currentSectionId = $(this.element).attr("id");
            console.log(currentSectionId);
            setActive(currentSectionId);
        };
    },{ offset:'100px' });

    currentSection.waypoint(function(direction){
        if(direction == "up"){
            let currentSectionId = $(this.element).attr("id");
            console.log(currentSectionId);
            setActive(currentSectionId);
        };
    },{ offset:'-5px' });
}

navScroll();

var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'cssanimation.css', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      new WOW().init();
      $(".pricing-slide").slick({
          arrows:false,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
              {
                  breakpoint: 1400,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 800,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
          ]
      });

      $(window).on("load",function(){
        $(".loader-container").fadeOut(500,function(){
            $(this).remove();
        });
      })
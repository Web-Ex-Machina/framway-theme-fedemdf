require('jssocials');
require('jssocials/dist/jssocials.css');
require('jssocials/dist/jssocials-theme-minima.css');

window.addEventListener("load",function(){
  $(".share-container").jsSocials({
    shares: [
      {share: "email", },
      {share: "facebook", logo: 'fab fa-facebook-f'},
      {share: "twitter", logo: 'fab fa-twitter'},
      // {share: "googleplus", logo: 'fab fa-google-plus-g'},
      // {share: "linkedin", logo: 'fab fa-linkedin'},
      // {share: "pinterest", logo: 'fab fa-pinterest'},
      // {share: "whatsapp", logo: 'fab fa-whatsapp'},
    ],
    showLabel : false
  });
});

$(function(){
    // sliderFW overide
  setTimeout(function(){
    $.each(app.components_active.sliderFW,function(){
      var slider = this;
      slider.autoTrigger = function() {
        var slider = this;
        slider.timerAuto = setTimeout(function(){
            slider.goToNext()
        },10000);
      };
      if(slider.auto){
        slider.$el.bind('mouseenter',function(){
          clearTimeout(slider.timerAuto);
        });
        slider.$el.bind('mouseleave',function(){
          slider.autoTrigger();
        });
      }
      slider.content.$el.append('<div class="sliderFW__arrow prev"></div><div class="sliderFW__arrow next"></div>');
      slider.$el.find('.sliderFW__arrow').bind('click',function(e){
        if($(this).hasClass('prev'))
          slider.goToPrev();
        if($(this).hasClass('next'))
          slider.goToNext();
      });
    });
  },1)
  backToTop();
});

function backToTop(){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $btt = $('<a href="#0" class="cd-top"><i class="fas fa-chevron-circle-up"></i></a>');
    $('body').append($btt);

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $btt.addClass('cd-is-visible') : $btt.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $btt.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $btt.on('click', function(event){
        console.log(event);
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
  }
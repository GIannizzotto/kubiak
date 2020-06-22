$(document).ready(function(){

  $('.form-group.submit').mouseenter(function(){
    $('.arrow-right i').css("display","block");
  });

  $('.form-group.submit').mouseleave(function(){
    $('.arrow-right i').css("display","none");
  });

  $('#link-leathers').click(function(event){
    event.preventDefault();
    $('#link-leathers').addClass('active');
    $('#link-pets').removeClass('active');
    $('.sidebar-menu.side-leathers').css("margin-right","0");
    $('.sidebar-menu.side-pets').css("margin-right","-800px");
    $('.modal-nav').css({
      'opacity' : '1',
      'pointer-events' : 'auto'
    });
  });

  $('#link-pets').click(function(event){
    event.preventDefault();
    $('#link-pets').addClass('active');
    $('#link-leathers').removeClass('active');
    $('.sidebar-menu.side-pets').css("margin-right","0");
    $('.sidebar-menu.side-leathers').css("margin-right","-800px");
    $('.modal-nav').css({
      'opacity' : '1',
      'pointer-events' : 'auto'
    });
  });

  $(window).on("scroll", function() {
    $('#link-pets').removeClass('active');
    $('#link-leathers').removeClass('active');
    $('.sidebar-menu.side-pets').css("margin-right","-800px");
    $('.sidebar-menu.side-leathers').css("margin-right","-800px");
    $('.modal-nav').css({
      'opacity' : '0',
      'pointer-events' : 'none'
    });
  });

  $('.modal-nav').click(function(event){
    event.preventDefault();
    $('.sidebar-menu.side-pets').css("margin-right","-800px");
    $('.sidebar-menu.side-leathers').css("margin-right","-800px");
    $('#link-pets').removeClass('active');
    $('#link-leathers').removeClass('active');
    $('.modal-nav').css({
      'opacity' : '0',
      'pointer-events' : 'none'
    });
  });

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  var typed = new Typed(".typing", {
    strings: ["precios", "^1000 productos", "^1000 cueros"],
    typeSpeed: 60,
    backSpeed: 40,
    startDelay: 1000,
    backDelay: 500
  });

  $('a[href^="#contact"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  $('html, body').stop().animate({
     'scrollTop': $target.offset().top
  }, 900, 'swing');

  $(function() {
    $('body').pageCrossFade({
      duration: 350,
      easing: 'swing',
      links: '.link'
    });
  });

});

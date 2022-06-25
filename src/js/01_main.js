$(document).ready(function() {
    $('.question__btn_good').on('click', function () {
        $(this).parents('span').addClass('good');
        setTimeout(function(){
            window.location.href = 'front-page.html';
        }, 2000);
      });
      $('.question__button span .question__btn-error').on('click', function () {
        $(this).parents('span').addClass('error');
        setTimeout(function(){
            $('.question__popup').addClass('open__popup')
        }, 2000);
      });
      $('.question__refresh').on('click', function () {
        location.reload();
        return false;
      });
      $('.menu__burger').on('click', function () {
        if ($('.header .navmenu .navbar').hasClass('open__menu')) {
            $('.header .navmenu .navbar').removeClass('open__menu');
          } else {
            $('.header .navmenu .navbar').addClass('open__menu');
          }
      });
      $('.home-slider .slider__block').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: $('.home-slider-prev'),
        nextArrow: $('.home-slider-next'),
        responsive: [
          {
            breakpoint: 990,
            settings: {
              arrows: false,
            }
          }
        ]
      });
      $('.audio .btn-play').on('click', function () {
        if ($(this).parents('.btn-play').hasClass('play')) {
            $(this).parents('.btn-play').removeClass('play');
          } else {
            $(this).parents('.btn-play').addClass('play');
          }
      });
      $(window).on('load resize', function() {
        if ($(window).width() < 768) {
          $('.home__cases-posts').slick({
            infinite: true,
            speed: 600,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            centerMode: true, 
            dots: true,
          });
        } 
      });
      $(window).on('load resize', function() {
        if ($(window).width() < 768) {
          $('.podcasts__slider').slick({
            infinite: true,
            speed: 600,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            centerMode: true, 
            dots: true,
          });
        } 
      });
      $('.filter__btn').on('click', function () {
        if ($('.filter__modal').hasClass('active')) {
          $('.filter__modal').removeClass('active');
          } else {
            $('.filter__modal').addClass('active');
          }
      });
      $('.filter__close').on('click', function () {
        if ($('.filter__modal').hasClass('active')) {
          $('.filter__modal').removeClass('active');
          }
      });
      $('.btn__close').on('click', function () {
        if ($('.filter__modal').hasClass('active')) {
          $('.filter__modal').removeClass('active');
          }
      });
      
      //подсчет чекбоксов
      var count = 0;
        $(function() {
            count = $('input[type=checkbox]:checked').length;
            displayCount();  

            $('.filter__box label input[type=checkbox]').bind('click' , function(e, a) {   
                if (this.checked) {
                      count += a ? -1 : 1;
                } else {
                      count += a ? 1 : -1;
                }
                displayCount();
            });
            $('.btn__reset').on('click', function () {
              count = 0;
              displayCount();
            });
        });

        function displayCount() {
            $('.filter__count').text(count);
        }

        $('.btn-open-search').on('click', function () {
          if ($('.page-header__search').hasClass('active')) {
            $('.page-header__search').removeClass('active');
            } else {
              $('.page-header__search').addClass('active');
            }
        });
        $('.page-header__search span.back').on('click', function () {
          if ($('.page-header__search').hasClass('active')) {
            $('.page-header__search').removeClass('active');
            }
        });
        $('.page-header__search span.reset').on('click', function () {
          $('.page-header__search input[type="text"]').val('');
        });


        //прогресс бар
        function progressBar() {
            // Узнаем на сколько страница прокручена
            let scroll = document.body.scrollTop || document.documentElement.scrollTop;
            // Узнаем высоту всей страницы
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // Получаем в % на сколько прокручена страница
            let scrolled = scroll / height * 100;
        
            // Подставляем % прокрутки в ширину нашей линии
            document.getElementById('progressBar').style.width = 17 + scrolled + '%';
        }
        
        // Запускаем функцию, когда пользователя скролит
        window.addEventListener('scroll', progressBar);


        $(".event__post .box-body .adress").on('click', function() {
          $(this).parents(".event__post .box-body").addClass('active');
        }); 
        $(".popup-adress-close, .popup__adress-wrapper").click(function(){
            $(this).parents(".event__post .box-body").removeClass('active');
        });


				$('.program .program__title .curtail').on('click', function () {
          if ($('.program .program__block').hasClass('active')) {
          $('.program .program__block').removeClass('active');
          $('.program .program__title .curtail').text("Развернуть");
          } else {
            $('.program .program__block').addClass('active');
            $('.program .program__title .curtail').text("Скрыть");
          }
          });
        //Добавляется класс к header при скроле
        $(function () {
          var element = $("header.header"), display;
          $(window).scroll(function () {
            display = $(this).scrollTop() < 100;
            if(display){
              $('header.header').removeClass('scroll');
            }else{
              $('header.header').addClass('scroll');
            }
          });
        });
        $(window).on('load resize', function() {
          if ($(window).width() < 600) {
            $('.tabs__block').slick({
              infinite: true,
              speed: 600,
              slidesToScroll: 1,
              slidesToShow: 4,
              arrows: false,
              dots: false,
              responsive: [
                {
                  breakpoint: 389,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            });
          } 
        });
        $(window).on('load resize', function() {
          if ($(window).width() < 768) {
            $('.helper__posts .helper__posts__block .helper__slider').slick({
              infinite: true,
              speed: 600,
              slidesToScroll: 1,
              slidesToShow: 1,
              arrows: false,
              centerMode: true, 
              dots: true,
            });
          } 
        });
});

const nav = document.querySelector('.menu__burger');
nav.addEventListener('click',(event) => {
    nav.classList.toggle('open');
});
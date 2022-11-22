addEventListener('DOMContentLoaded', function () {

  pickmeup('.range', {
    flat: true,
    format: 'm-Y-d',
    mode: 'range',
    locale: 'ru'
  })

})

pickmeup.defaults.locales['ru'] = {
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
};


$(document).ready(function() {
  if($(".custom-select")){
    $(".custom-select").each(function() {
      var classes = $(this).attr("class"),
          id      = $(this).attr("id"),
          name    = $(this).attr("name");
      var template =  '<div class="' + classes + '">';
          template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
          template += '<div class="custom-options">';
          $(this).find("option").each(function() {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
          });
      template += '</div></div>';
      
      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
      $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
      $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function() {
      $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
      $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
  }


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
  $(window).on('load resize', function() {
    if ($(window).width() < 769) {
      $('.home__cases .cases-slider').slick({
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
    if ($(window).width() < 769) {
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
  $(window).on('load resize', function() {
    if ($(window).width() < 550) {
      $('.kt-tabs-title-list').slick({
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
        ]
      });
    } 
  });
  $(window).on('load resize', function() {
    if ($(window).width() < 769) {
      $('#helper__slider').slick({
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

    $('.menu__burger').on('click', function () {
      if ($('.header .navmenu .navbar').hasClass('open__menu')) {
          $('.header .navmenu .navbar').removeClass('open__menu');
        } else {
          $('.header .navmenu .navbar').addClass('open__menu');
        }
    });

    $('.audio .btn-play').on('click', function () {
      if ($(this).parents('.btn-play').hasClass('play')) {
          $(this).parents('.btn-play').removeClass('play');
        } else {
          $(this).parents('.btn-play').addClass('play');
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
    

    $('.menu__burger').on('click', function () {
      if ($('.menu__burger').hasClass('open')) {
        $('.menu__burger').removeClass('open');
        } else {
          $('.menu__burger').addClass('open');
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

      $('.terms__count').appendTo('.post__count span');

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


      // $('#pagination').on('click', '.event__post .box-body .adress', function(e){
      //   e.preventDefault();
      //   $(this).parents(".event__post .box-body").addClass('active');
      // })
      $(".event__post .box-body .adress").on('click', function() {
        $(this).parents(".event__post .box-body").addClass('active');
      }); 
      $(".popup-adress-close, .popup__adress-wrapper").click(function(){
          $(this).parents(".event__post .box-body").removeClass('active');
      });
      $(".reminder").on('click', function() {
        $(this).parents(".event__post .box-body").find('.reminder-modal').addClass('active');
        $('.single-header__block.event .reminder-modal').addClass('active');
        //получения значения из блока
        var value_date = $(this).parents(".event__post").find('.date-form').text();
        $('.reminder-modal.active').find('input.inputdate').val(value_date);
        var value_name = $(this).parents(".event__post .box-body ").find('.title').text();
        $('.reminder-modal.active').find('input.inputname').val(value_name);
        var value_url = $(this).parents(".event__post .box-body").find('a.title').attr('href');
        $('.reminder-modal.active').find('input.inputurl').val(value_url);
        var value_2 = $(".single-header__block.event").find('.date-form').text();
        var value_url_2 = document.location.href;
        $('input.inputdate').val(value_2);
        var value_name_2 = $(".single-header__block.event .single-header__title").text();
        $('input.inputname').val(value_name_2);
        $('.single-header__block.event .reminder-modal').find('input.inputurl').val(value_url_2);
      }); 
      $(".memo").on('click', function() {
        $(this).parents(".home__events-post .post-main").find('.reminder-modal').addClass('active');
        //получения значения из блока
        var home_value_date = $(this).parents(".home__events-post").find('.date-form').text();
        $('.reminder-modal.active').find('input.inputdate').val(home_value_date);
        var home_value_name = $(this).parents(".home__events-post .post-main").find('.title').text();
        $('.reminder-modal.active').find('input.inputname').val(home_value_name);
        var home_value_url = $(this).parents(".home__events-post .post-main").find('a.title').attr('href');
        $('.reminder-modal.active').find('input.inputurl').val(home_value_url);
      }); 
      $(".reminder-close, .reminder-wrapper, .reminder-cancel").click(function(){
          $(this).parents(".event__post .box-body").find('.reminder-modal').removeClass('active');
          $(this).parents(".home__events-post .post-main").find('.reminder-modal').removeClass('active');
          $('.single-header__block.event .reminder-modal').removeClass('active');
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

      $(".event-post.offline .event-offline__block .right-box .map a.adress").on('click', function() {
        $(this).parents(".event-post.offline .event-offline__block .right-box .map").addClass('active');
      }); 
      $(".popup-adress-close, .popup__adress-wrapper").click(function(){
          $(this).parents(".event-post.offline .event-offline__block .right-box .map").removeClass('active');
      });


      //перемещение карты
      $('.map .map__block  .map__box .map__adress .box .text-box').on('click', function() {
        $('.map .map__block  .map__box .map__frame .map-code').remove();
        if ($('.map .map__block  .map__box .map__adress .box').hasClass('active')) {
        $('.map .map__block  .map__box .map__adress .box').removeClass('active');
    
        $(this).parents(".map .map__block  .map__box .map__adress .box").addClass('active');
        $(this).parents('.map .map__block  .map__box .map__adress .box.active').find('.map-code').clone().appendTo('.map .map__block  .map__box .map__frame');
        } else {
            $('.map .map__block  .map__box .map__adress .box').removeClass('active');
            $(this).parents(".map .map__block  .map__box .map__adress .box").addClass('active');
            $(this).parents('.map .map__block  .map__box .map__adress .box.active').find('.map-code').clone().appendTo('.map .map__block  .map__box .map__frame');  
        }
    })
    if ($('.map .map__block  .map__box .map__adress .box').hasClass('active')) {
        $('.map .map__block  .map__box .map__frame .map-code').remove();
        $('.map .map__block  .map__box .map__adress .box.active').find('.map-code').clone().appendTo('.map .map__block  .map__box .map__frame');
    }


$('.single-header.podcast .single-header__block .single-header__block .box-text .box-btn .share-btn').on('click', function() {
  $('.single-header.podcast .single-header__block .single-header__block .box-text .box-btn').addClass('active');
});
$('.single-header.podcast .single-header__block .single-header__block .box-text .box-btn .share .tooltip').on('click', function() {
  $('.single-header.podcast .single-header__block .single-header__block .box-text .box-btn .share .myInput').select();
  document.execCommand('copy');
  $('.single-header.podcast .single-header__block .single-header__block .box-text .box-btn .share .tooltip').innerHTML = "Copied: " + $('.single-header.podcast .single-header__block .single-header__block .box-text .box-btn .share .tooltip').value;
  setTimeout(function() {
    $('.single-header.podcast .single-header__block .single-header__block .box-text .box-btn').removeClass('active');
    
  }, 1500);
})

$('.player .player-right .plays .track a img').on('click', function() {
  $('.player .player-right .plays .track').removeClass('active');
  $(this).parents('.player .player-right .plays .track').addClass('active');
});

$('.player .player-right .plays .track .share .tooltip').on('click', function() {
  $(this).parents('.player .player-right .plays .track .share').find('.myInput').select();
  document.execCommand('copy');
  $(this).parents('.player .player-right .plays .track .share').find('.myTooltip').innerHTML = "Copied: " + $(this).parents('.player .player-right .plays .track .share').find('.myInput').value;
  setTimeout(function() {
    $('.player .player-right .plays .track').removeClass('active');
  }, 1500);
});
$('.cookies-btn').on('click', function() {
  $('.cookies-section').addClass('d-none');
});
//начало фильтра



const ajaxInfo = $('#ajax-info')
const action = ajaxInfo.data('action')
const postType = ajaxInfo.data('post-type')
const pagenumlink = ajaxInfo.data('pagenumlink')
let args = ajaxInfo.data('args')
const contentNews = $('#content-news')
const pagination = $('#pagination')
const bodyTag = $('body')
let postLink = null
const qty = $('.post__count span')


qty.text(ajaxInfo.data('qty'))
const dateStart = $(".date-start"),
  dateEnd = $(".date-end"),
currentDate = $(".current-date"),
  calendar = $('.range');

const changeDate = function () {
  const yearValue = []
  const monthValue = []
  const dayValue = []
  const _this = $(this)

  const years = _this.find('.pmu-years .pmu-selected')
  const month = _this.find('.pmu-months .pmu-selected')
  const day = _this.find('.pmu-days .pmu-selected')

  years.each(function () {
    yearValue.push(+$(this).text())
  })
  month.each(function () {
    monthValue.push($(this).text())
  })
  day.each(function () {
    dayValue.push(+$(this).text())
  })
let valueDateStart = dayValue[0] ? Math.min(...yearValue) + '-' + monthValue[0] + '-' + dayValue[0] : currentDate.val()
let valueDateEnd = dayValue.slice(-1).length !== 0 ? Math.max(...yearValue) + '-' + monthValue.slice(-1) + '-' + dayValue.slice(-1) : currentDate.val()
  
dateStart.val(valueDateStart)
  dateEnd.val(valueDateEnd)
  // Теперь в инпутах есть стартовая и финальная дата для фильтрации постов
}

calendar.on('click', changeDate)

//   $('.send-btn').on('click', function () {
//     calendar.trigger('click')
//   })

const postsFilter = $('#posts-filter')

const ajaxSendFilter = function () {
  calendar.trigger('click')
  let _this = $(this)

  $.ajax({
    url: _this.attr('action'),
    data: _this.serialize(), // form data
    type: _this.attr('method'), // POST
    dataType: 'json',
    beforeSend: function (xhr) {
      _this.find('.send-btn').text('Загрузка...')
      bodyTag.addClass('loading')
    },
    success: function (data) {
// 		  console.log(data)
      _this.find('.send-btn').text('Применить фильтр')
      $('.filter__modal').removeClass('active')
      contentNews.html(data.posts)
      pagination.html(data.pagination)
  qty.text(data.qty)
      ajaxInfo.attr('data-args', data.args)
      bodyTag.removeClass('loading')

      let linkUrl = new URLSearchParams('')
      let category = null
  let tag = null
      postLink = data.post

      let dateStart = data.startDate ? data.startDate : ''
      dateStart ? linkUrl.append('date-start', dateStart) : ''

      let dateEnd = data.endDate ? data.endDate : ''
      dateEnd ? linkUrl.append('date-end', dateEnd) : ''

      category = postLink.category ? postLink.category.toString().split(',').join(' ') : ''
      category ? linkUrl.append('category', category) : ''
    
  tag = postLink.tag ? postLink.tag.toString().split(',').join(' ') : ''
      tag ? linkUrl.append('tag', tag) : ''

      let linkAmp = linkUrl.toString() ? '?' : ''
      let link = postLink.pagenumlink.split('?')[0] + linkAmp + linkUrl.toString()

      history.pushState(null, null, link)
    
    $('.home__cases-post.d-none-mobile').html(contentNews.find('.home__cases-post:first-child').html())
    }
  })
  return false
}
const ajaxResetFilter = function () {
 $(this).parents('#posts-filter').find('.range .pmu-years').each(function () {
    if ($(this).find('.pmu-button').hasClass('pmu-selected')) {
  $(this).find('.pmu-button').removeClass('pmu-selected')
  }
  })
 
$(this).parents('#posts-filter').find('.range .pmu-months').each(function () {
    if ($(this).find('.pmu-button').hasClass('pmu-selected')) {
  $(this).find('.pmu-button').removeClass('pmu-selected')
  }
  })
 
 $(this).parents('#posts-filter').find('.range .pmu-days').each(function () {
    if ($(this).find('.pmu-button').hasClass('pmu-selected')) {
  $(this).find('.pmu-button').removeClass('pmu-selected')
  }
  })

 postsFilter[0].reset();
 postsFilter.submit()

}

postsFilter.on('submit', ajaxSendFilter)
$('.reset-btn').on('click', ajaxResetFilter)

pagination.on('click', '.page-numbers', function (e) {
  e.preventDefault()
  let _this = $(this)
  let newPaged = _this.attr('href').split('/')
  newPaged.pop()

//     console.log(+newPaged[newPaged.length - 1]);
  if (Number.isNaN(+newPaged[newPaged.length - 1])) {
    paged = 1
//       console.log(true);
  } else {
//       console.log(false);
    paged = newPaged[newPaged.length - 1] ? newPaged[newPaged.length - 1] : 1
  }

  const locationHref = window.location.href
  let getInfo = locationHref.split('?')[1]

  if (!bodyTag.hasClass('loading')) {
    $.ajax({
      type: 'POST',
      url: ajaxurl.ajaxurl, // получаем из wp_localize_script()
      data: { paged, args, action, pagenumlink, getInfo, postType },
      dataType: 'json',
      beforeSend: function (xhr) {
        bodyTag.addClass('loading')
      },
      success: function (data) {
// 			console.log(data)
        let linkUrl = new URLSearchParams('')
//           console.log(data);
        let getFilter = null
        let filterUrl = locationHref.split('?')[1]
          ? locationHref.split('?')[1]
          : ''

//           console.log(locationHref.split('?'));
        if (filterUrl.indexOf('_page=') === -1) {
          getFilter = filterUrl
        } else {
          let arr = filterUrl.split('&')
          arr.shift()
          getFilter = arr.join('&')
        }

        let getFilterUrl = getFilter ? '&' + getFilter : ''
        let finalLink = linkUrl + '?_page=' + data.paged + getFilterUrl
        history.pushState(null, null, finalLink)
        contentNews.html(data.posts)
        pagination.html(data.pagination)
        bodyTag.removeClass('loading')
    
    $('.home__cases-post.d-none-mobile').html(contentNews.find('.home__cases-post:first-child').html())
    $('.top__up').trigger('click')
      }
    });
  }
})

$('.home__cases-post.d-none-mobile').html(contentNews.find('.home__cases-post:first-child').html())
//конец фильтра

$('.top__up').on('click', function(e) {
  e.preventDefault()
  $("body,html").animate({
      scrollTop:0
    }, 800);
    return false;
})



const search_input = $('.map__input');
const search_results = $('#search_box-result');
search_input.keyup(function () {
    let search_value = $(this).val();
    

    if (search_value.length > 0) { // кол-во символов
      let search_value = $(this).val();
        $.ajax({
            url: ajaxurl.ajaxurl,
            type: "POST",
            data: {
                "action": "ajax_search", // functions.php
                "term": search_value,
                // "map_select": search_select
            },
            success: function (results) {
                search_results.fadeIn(200).html(results);
            }
        });
    } else {
        //search_results.fadeOut(200);
        $.ajax({
          url: ajaxurl.ajaxurl,
          type: "POST",
          data: {
              "action": "ajax_search", // functions.php
              "term": search_value,
              // "map_select": search_select
          },
          success: function (results) {
              search_results.fadeIn(200).html(results);
          }
      });
    }
});

  $(".map__form").bind("keypress", function(e) {
    if (e.keyCode == 13) {
        return false;
    }
});
const search_select = $('.custom-select-trigger');
let search_select_option = $('div.custom-options');
search_select_option.click(function () {
  let select_value = $(search_select).text();
  if (select_value) { // кол-во символов
    let search_value = $(search_select).text();
      $.ajax({
          url: ajaxurl.ajaxurl,
          type: "POST",
          data: {
              "action": "ajax_select", // functions.php
              "sources": select_value,
              // "map_select": search_select
          },
          success: function (results) {
              search_results.fadeIn(200).html(results);
          }
      });
  } else {
      //search_results.fadeOut(200);
      $.ajax({
        url: ajaxurl.ajaxurl,
        type: "POST",
        data: {
            "action": "ajax_select", // functions.php
            "sources": select_value,
            // "map_select": search_select
        },
        success: function (results) {
            search_results.fadeIn(200).html(results);
        }
    });
  }
});
});


(function ($) {

$('.play').on('click', function () {
  $('.play').addClass('active')
  $(this).removeClass('active')
  $('.pause').removeClass('active')
  $(this).next('.pause').addClass('active')
})
$('.pause').on('click', function () {
  $(this).removeClass('active')
  $(this).prev('.play').addClass('active')
})

let audio = null;    // Берём элемент audio
let btnPlay = $(".play");   // Берём кнопку проигрывания
let btnPause = $(".pause"); // Берём кнопку паузы
let audioTrack = $(".audio-track");
let timeText = null
let timeWidthText = null
let globalSrcAudio = null
let srcAudio = null

btnPlay.on("click", function () {
  $('.player').find('.audio-track').removeClass('active')
  $(this).parents('.player').find('.audio-track').addClass('active')
  audio ? audio.pause() : ''
  srcAudio = $(this).parents('.player').find('.audio').attr('src')

  if (globalSrcAudio === srcAudio) {
    audio.play()
  } else {
    audio = new Audio(srcAudio)
    audio.play()
    globalSrcAudio = srcAudio
  }

  $('.start-time').text('0:00')
  $('.time').css('width', '0')

  timeText = $(this).parents('.player').find('.start-time')
  timeWidthText = $(this).parents('.player').find('.time')
  // Запуск интервала 
  audioPlay = setInterval(function () {
    // Получаем значение на какой секунде песня
    let audioTime = Math.round(audio.currentTime);
    // Получаем всё время песни
    let audioLength = Math.round(audio.duration)
    // Назначаем ширину элементу time
    let timeWidth = (audioTime * 100) / audioLength + '%';
    timeWidthText.css('width', timeWidth)

    let min = audioTime >= 60 ? Math.floor(audioTime / 60) : 0
    let sek = Math.floor(audioTime - min * 60)
    sek = sek < 10 ? '0' + sek : sek
    sek = sek === 60 ? '00' : sek
    timeText.text(min + ':' + sek)

  }, 10)
})
btnPause.on("click", function () {
  audio.pause() // Останавливает песню
  clearInterval(audioPlay) // Останавливает интервал
})

$(".player").each(function () {

  let srcAudioItem = $(this).find('.audio').attr('src');
  let audioItem = new Audio(srcAudioItem);

  let allTimeText = $(this).find('.all-time');

  audioItem.onloadedmetadata = function () {
    let rew = audioItem.duration
    let min = rew > 60 ? Math.floor(rew / 60) : 0
    let sek = Math.floor(rew - min * 60)
    sek = sek < 10 ? '0' + sek : sek
    allTimeText.text(min + ':' + sek)
  }

})

$('.audio-track').mousemove(function (e) {
  srcAudio = $(this).parents('.player').find('.audio').attr('src')
  if (globalSrcAudio === srcAudio) {
    let widthTime = $(this).width()
    let allTime = audio.duration
    let currentTimeWidth = e.pageX - $(this).position().left    // Текущее время в px от левого края
    let currentTime = currentTimeWidth * allTime / widthTime        // Текущее время в секундах
    let min = currentTime > 60 ? Math.floor(currentTime / 60) : 0
    let sek = Math.floor(currentTime - min * 60)
    sek = sek < 10 ? '0' + sek : sek
    let left = currentTimeWidth + 0 + 'px'
    $(this).parents('.plays').find('.current-time').text(min + ':' + sek)
    $(this).find('.current-time').css({
      left, display: "block"
    })
  }
})

$('.audio-track').mouseout(function (e) {
  $(this).find('.current-time').css('display', 'none');
})

audioTrack.on("click", function (e) {
  srcAudio = $(this).parents('.player').find('.audio').attr('src')
  if (globalSrcAudio === srcAudio) {
    $(this).parents('.player').find('.audio-track').addClass('active')
    let widthTime = $(this).width()
    let allTime = audio.duration
    let currentTimeWidth = e.pageX - $(this).position().left    // Текущее время в px от левого края
    let currentTime = currentTimeWidth * allTime / widthTime        // Текущее время в секундах
    $(this).parents('.plays').find('.play').removeClass('active')
    $(this).parents('.plays').find('.pause').addClass('active')
    $('.start-time').text('0:00')
    $('.time').css('width', '0')
    timeText = $(this).parents('.player').find('.start-time')
    timeWidthText = $(this).parents('.player').find('.time')
    audio.currentTime = currentTime
    audio.play() // Запуск песни
    // // Запуск интервала 
    audioPlay = setInterval(function () {
      // Получаем значение на какой секунде песня
      let audioTime = Math.round(audio.currentTime);
      // Получаем всё время песни
      let audioLength = Math.round(audio.duration)
      // Назначаем ширину элементу time
      let timeWidth = (audioTime * 100) / audioLength + '%';
      timeWidthText.css('width', timeWidth)

      let min = audioTime >= 60 ? Math.floor(audioTime / 60) : 0
      let sek = Math.floor(audioTime - min * 60)
      sek = sek < 10 ? '0' + sek : sek
      sek = sek === 60 ? '00' : sek
      timeText.text(min + ':' + sek)

    }, 10)
  } else {
    $(this).parents('.player').find('.audio-track').removeClass('active')
  }

});



})(jQuery);




$(document).ready(function() {
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
    $('.question__btn_good').on('click', function () {
        $(this).parents('span').addClass('good');
        setTimeout(function(){
            window.location.href = 'main';
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
        $(".reminder").on('click', function() {
          $(this).parents(".event__post .box-body").find('.reminder-modal').addClass('active');
          $('.single-header__block.event .reminder-modal').addClass('active');
        }); 
        $(".reminder-close, .reminder-wrapper, .reminder-cancel").click(function(){
            $(this).parents(".event__post .box-body").find('.reminder-modal').removeClass('active');
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

  $('.map .map__block .map__form .map__box .map__adress .box .text-box').on('click', function() {
    $('.map .map__block .map__form .map__box .map__frame .map-code').remove();
    if ($('.map .map__block .map__form .map__box .map__adress .box').hasClass('active')) {
      $('.map .map__block .map__form .map__box .map__adress .box').removeClass('active');
  
      $(this).parents(".map .map__block .map__form .map__box .map__adress .box").addClass('active');
      $(this).parents('.map .map__block .map__form .map__box .map__adress .box.active').find('.map-code').clone().appendTo('.map .map__block .map__form .map__box .map__frame');
      } else {
        $('.map .map__block .map__form .map__box .map__adress .box').removeClass('active');
        $(this).parents(".map .map__block .map__form .map__box .map__adress .box").addClass('active');
        $(this).parents('.map .map__block .map__form .map__box .map__adress .box.active').find('.map-code').clone().appendTo('.map .map__block .map__form .map__box .map__frame');  
      }
  })
  if ($('.map .map__block .map__form .map__box .map__adress .box').hasClass('active')) {
    $('.map .map__block .map__form .map__box .map__frame .map-code').remove();
    $('.map .map__block .map__form .map__box .map__adress .box.active').find('.map-code').clone().appendTo('.map .map__block .map__form .map__box .map__frame');
  }

  $('.player .player-right .plays .track a').on('click', function() {
    if ($(this).parents('.player .player-right .plays .track').hasClass('active')) {
      $('.player .player-right .plays .track').removeClass('active');
      $(this).parents('.player .player-right .plays .track').addClass('active');
    } else {
      $('.player .player-right .plays .track').removeClass('active');
      $(this).parents('.player .player-right .plays .track').addClass('active');
    }

  });


  $('.player .player-right .plays .track .share .tooltip').on('click', function() {
    $(this).parents('.player .player-right .plays .track .share').find('.myInput').select();
    document.execCommand('copy');
    $(this).parents('.player .player-right .plays .track .share').find('.myTooltip').innerHTML = "Copied: " + $(this).parents('.player .player-right .plays .track .share').find('.myInput').value;
    setTimeout(function() {
      $('.player .player-right .plays .track').removeClass('active');
			
		}, 1500);
  });

  //начало фильтра

  addEventListener('DOMContentLoaded', function () {

    pickmeup('.range', {
      flat: true,
      format: 'm-Y-d',
      mode: 'range',
      locale: 'en' // для переключения на русский поставь ru
    })

  })

  pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  }
  const ajaxInfo = $('#ajax-info')
  const action = ajaxInfo.data('action')
  const pagenumlink = ajaxInfo.data('pagenumlink')
  let args = ajaxInfo.data('args')
  const contentNews = $('#content-news')
  const pagination = $('#pagination')
  const bodyTag = $('body')
  let postLink = null

  const dateStart = $(".date-start"),
    dateEnd = $(".date-end"),
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
    localStorage.setItem('dayValue', JSON.stringify(dayValue))
    dateStart.val(Math.min(...yearValue) + '-' + monthValue[0] + '-' + dayValue[0])
    dateEnd.val(Math.max(...yearValue) + '-' + monthValue.slice(-1) + '-' + dayValue.slice(-1))
    // Теперь в инпутах есть стартовая и финальная дата для фильтрации постов
  }

  calendar.on('click', changeDate)
  $('.send-btn').on('click', function () {
    calendar.trigger('click')
  })
  
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
        _this.find('.send-btn').text('Применить фильтр')
        contentNews.html(data.posts)
        pagination.html(data.pagination)
        ajaxInfo.attr('data-args', data.args)
        bodyTag.removeClass('loading')

        let linkUrl = new URLSearchParams('')
        let category = null
        postLink = data.post

        let dateStart = data.startDate ? data.startDate : ''
        dateStart ? linkUrl.append('date-start', dateStart) : ''

        let dateEnd = data.endDate ? data.endDate : ''
        dateEnd ? linkUrl.append('date-end', dateEnd) : ''

        category = postLink.category ? postLink.category.toString().split(',').join(' ') : ''
        category ? linkUrl.append('category', category) : ''

        let linkAmp = linkUrl.toString() ? '?' : ''
        let link = postLink.pagenumlink.split('?')[0] + linkAmp + linkUrl.toString()

        history.pushState(null, null, link)
      }
    })
    return false
  }

  postsFilter.on('submit', ajaxSendFilter)

  pagination.on('click', '.page-numbers', function (e) {
    e.preventDefault()
    let _this = $(this)
    let newPaged = _this.attr('href').split('/')
    newPaged.pop()

    console.log(+newPaged[newPaged.length - 1]);
    if (Number.isNaN(+newPaged[newPaged.length - 1])) {
      paged = 1
      console.log(true);
    } else {
      console.log(false);
      paged = newPaged[newPaged.length - 1] ? newPaged[newPaged.length - 1] : 1
    }

    const locationHref = window.location.href
    let getInfo = locationHref.split('?')[1]

    if (!bodyTag.hasClass('loading')) {
      $.ajax({
        type: 'POST',
        url: ajaxurl.ajaxurl, // получаем из wp_localize_script()
        data: { paged, args, action, pagenumlink, getInfo },
        dataType: 'json',
        beforeSend: function (xhr) {
          bodyTag.addClass('loading')
        },
        success: function (data) {

          let linkUrl = new URLSearchParams('')
          console.log(data);
          let getFilter = null
          let filterUrl = locationHref.split('?')[1]
            ? locationHref.split('?')[1]
            : ''

          console.log(locationHref.split('?'));
          if (filterUrl.indexOf('page=') === -1) {
            getFilter = filterUrl
          } else {
            let arr = filterUrl.split('&')
            arr.shift()
            getFilter = arr.join('&')
          }

          let getFilterUrl = getFilter ? '&' + getFilter : ''
          let finalLink = linkUrl + '?page=' + data.paged + getFilterUrl
          history.pushState(null, null, finalLink)
          contentNews.html(data.posts)
          pagination.html(data.pagination)
          bodyTag.removeClass('loading')
        }
      });
    }
  })



  //конец фильтра
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




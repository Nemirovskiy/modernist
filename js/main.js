 $(document).ready(function(){
      $('.slider__box').bxSlider({
      	pager: false,
      	nextText: '',
      	prevText: ''
      });
      $('#menuBtn').click(function (){
      	$('.menu__list').toggleClass('menu__list_md-display');
      	$('#menuBtn').toggleClass('menu__button_active');
      });
      $('.menu__list').click(function (){
      	$('.menu__list').removeClass('menu__list_md-display');
      	$('#menuBtn').removeClass('menu__button_active');
      });
    });
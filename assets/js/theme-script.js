$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		// $('header .header-navigation > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fas fa-times"></i></a></li>');
		$("header .header-navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	function callMenu() {
		if ($('body').hasClass('show-header-navigation')) {
			$('body').removeClass('show-header-navigation');
		} else {
			$('body').addClass('show-header-navigation');
		}
	}
	
	$(document).on("click", "header .header-navigation > a, .header-overlay", function () {
		callMenu();
	});
	
	const myBanner = new Swiper('#swiper-banner', {
		loop: true,
		spaceBetween: 50,
		speed: 250,
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		}
	});
	
	$('#slide-sideRight').slick({
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 25000,
		arrows: false,
	});
	
	$('.input-effect').blur(function () {
		$(this).val() != '' ? $(this).addClass('valid') : $(this).removeClass('valid');
	});
	
	$('#theme-sel2').on('select2:opening', function (e) {
		$(this).addClass('valid');
	});
	
	$('#theme-sel2').on('select2:select', function (e) {
		if ($(this).select2('data').length < 1) {
			$(this).removeClass('valid');
		} else {
			$(this).addClass('valid');
		}
	})
	
	$('#theme-sel2').on('select2:close', function (e) {
		if ($(this).select2('data').length < 1) {
			$(this).removeClass('valid');
		}
	});
	
	$('.js_remove-notification').click(function (e) {
		e.stopPropagation();
		$(this).closest('li').remove();
	});
	
	$('header .header-mobilesearch > a').click(function (e) {
		if ($('header .header-form').hasClass('show')) {
			$('header .header-form').removeClass('show');
		} else {
			$('header .header-form').addClass('show');
		}
	});
	
	$(document).on("click", ".showDesc", function () {
		if ($(this).prev('.desc-content').hasClass('content-full')) {
			$(this).prev('.desc-content').removeClass('content-full');
		} else {
			$(this).prev('.desc-content').addClass('content-full');
		}
	});
	$('.theme-sel2').select2();
})
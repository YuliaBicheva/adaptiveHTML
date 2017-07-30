$(function() {
	$('#my-menu').mmenu({
		extensions: [ 'widesceen', 'theme-black', 'fx-menu-slide', 'pagedim-black'],
		navbar : {
			title: '<img src="img/logo1.svg" alt="Салон красоты Смилтер"/>'
		},
		offCanvas: {
           position  : 'right'
        }
	});

	var api = $('#my-menu').data( "mmenu" );

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active')
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active')
	});

	$('.carousel-services').on('initialize.owl.carousel', function(){
		setTimeout(function(){carouselService()}, 100);
	});


	$('.carousel-services').owlCarousel({
		// loop : true,
		dots : false,
		nav : true,
		smartSpeed : 700,
		navText : ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	
	function carouselService(){
		$('.carousel-services-item').each(function() {
			var $this = $(this);
			var thisHeight = $this.find('.carousel-services-content').outerHeight();
			$this.find('.carousel-services-image').css('min-height', thisHeight);
		});
	}

	carouselService();

	$('.carousel-services-composition .h3').each(function(){
		var $this = $(this);
		$this.html($this.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();

	window.onresize = function(){onResize()};


});


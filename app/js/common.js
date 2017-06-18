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

	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active')
	}).bind('close:start', function() {
		$('.hamburger').removeClass('is-active')
	});
});

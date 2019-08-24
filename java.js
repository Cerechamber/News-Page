$(function(){

	$(document).ready(function(){
		$.get('http://data.fixer.io/api/latest',
		{'access_key': '0a54fa1833742170e0de2c0a0efebedc'},
		function(response){
			$('.euro').text('EUR ' + response.rates.RUB.toFixed(2));
			var dollar = response.rates.RUB / response.rates.USD;
			$('.usd').text('USD ' + dollar.toFixed(2));
		});

		});

	$('.button-menu').click(function(){
		var width = $(document).width();
		if(width <= 600){
		$('.open-menu1').toggle();
		$(this).toggleClass('button-menu-cross');
	}
	else
	{
		$('.open-menu').toggle();
		$(this).toggleClass('button-menu-cross');

	}
	});

$(window).resize(function(){
	$('.open-menu').hide();
	$('.open-menu1').hide();
	$('.button-menu').removeClass('button-menu-cross');
});



	});


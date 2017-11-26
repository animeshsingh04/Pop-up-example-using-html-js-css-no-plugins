$(document).ready(function(){
	$('#popup').click(function(){
		$('#abc').fadeIn();
		$('body').css('overflow','hidden');
	});

	$('#closeup').click(function(){
		$('#abc').hide();
		$('body').css('overflow','');
	});
});
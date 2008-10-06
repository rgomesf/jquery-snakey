/*
 *
 * Filename:	common.js
 * Developer:	Richard Willis
 *
 */

$(function(){
	// FF2/Mac Opacity Bug
	($.browser.mozilla && parseFloat($.browser.version) < 1.9 && navigator.appVersion.indexOf('Mac') !== -1) && $('body').css('-moz-opacity',.999);
			
	// setup the game
	Snake.setup();
			
	$("a#start-game").click(function(e){
		e.preventDefault();
		// start the game
		Snake.newGame();
	});
			
	$("a#bugs-exp").click(function(){
		$(".bugs").slideToggle();
	});
	$("a#source-exp").click(function(){
		$(".source").slideToggle();
	});
	$("a#scores-exp").click(function(){
		//return;
		// get the high scores
		$.ajax({
			type : "GET",
			url : "snakey-scores.php",
			data : "view=10",
			dataType : "json",
			success : function(data){
				eval(data);
				$("#high-scores").html("<span class=\"head\">\
							<span class=\"col1\">Pos.</span>\
							<span class=\"col2\">Score</span>\
							<span class=\"col3\">Name</span>&nbsp;</span>");
				for(var i in data) {
                      	        	 $("#high-scores").append("<span class=\"row\">\
								<span class=\"col1\">"+(parseInt(i)+1)+"</span>\
								<span class=\"col2\">"+data[i][0]+"</span>\
								<span class=\"col3\">"+data[i][1]+"</span>&nbsp;</span>");
				}
	                	$("#high-scores").slideToggle();
       	                }
		});
	});
});

/* end of file */

/* 
  Author: Amelia Schmidt
*/

/*
 Internet Explorer struggles with some basic CSS rules http://www.quirksmode.org/css/background.html#size
 So we adapt a workaround from CSS Tricks http://css-tricks.com/perfect-full-page-background-image/
 */
function emulateBackgroundSizeCoverCSSRuleForIE(){
	var theWindow = $(window),
	    $bg = $("#bg"),
	    aspectRatio = $bg.width() / $bg.height();
	    
	function resizeBg() {

		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg.removeClass().addClass('bgheight');
		} else {
		    $bg.removeClass().addClass('bgwidth');
		}

	}

	theWindow.resize(function() {
		resizeBg();
	}).trigger("resize");  
}


$(function(){
	
	/* bind a click for mailchimp to the pretty arrows because background image replacements on submit buttons are balls */
  $('#arrows').click(function(){
  	$('#mc-embedded-subscribe').click();
  });	

  if($.browser.msie) {
    $('#bg').css('display', 'block');
    emulateBackgroundSizeCoverCSSRuleForIE();  
  }
});



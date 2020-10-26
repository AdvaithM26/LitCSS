/**
 * !IMPORTANT REQUIRES JQUERY
 *
 */
window.addEventListener('load', function(){
	$("a[data-offset], a[href^='#']:not(a[href$='#']), button[data-offset], button[href^='#']").on("click", function (e) {
		e.preventDefault();
		var offset = 100; //Default offset
		var target = this.hash;
		if ($(this).data("offset") != undefined) offset = $(this).data("offset");
		$("html, body").animate(
			{
				scrollTop: $(target).offset().top - offset,
				},
				0
		);
	});
})


linkOffset = function(thisNode){
	event.preventDefault();
		var offset = 100; //Default offset
		if ($(thisNode).data("offset") != undefined) offset = $(thisNode).data("offset");
		$("html, body").animate(
			{
				scrollTop: $(thisNode).offset().top - offset,
				},
				0
		);
}

 
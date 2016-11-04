'use strict';
// Nav Toggling
  $(".navbar-toggle").on("click", function(){
    $(".header, html").toggleClass("is-showing-nav");
  			});
	  $(".nav-link").on("click", function(e){
					if($(window).width() < 768) {
      $(".navbar-toggle").trigger("click");
    	}
    // Scroll to anchor
    e.preventDefault();
		var target_y = $($(this).attr("href")).offset().top - ($(".header").height() + 50);
						$("body, html").animate({
		  scrollTop: target_y
						}, 500, "swing");
  				});



  // Search Toggling
	  $(".search-toggle").on("click", function(){
$(".header").toggleClass("is-showing-search");
		  });
		  $(".site-search").on("submit", function(e){


								e.preventDefault();
		$(".search-toggle").trigger("click");
  });
  $(document).on("keyup", function(e){
				if (e.which === 27 && $(".header").hasClass("is-showing-search")) {  // [esc] key
								$(".search-toggle").trigger("click");
		}
	  			});
  $(".site-search-input").on("click", function(e){
     				e.stopPropagation();
	  });
		  $("#site-search").on("click", function(){ // clicking outside of input
						$(".search-toggle").trigger("click");
  });


  // Dropdown Videos
  var video_1 = $("#video-1")[0],
      					video_2 = $("#video-2")[0];
			  $("#travel-selector a").on("click", function(e){
		e.preventDefault();
				if ( $(this).data("panel") ) {
				  var target = $(this).data("panel"),
					  name = $(this).text();
	  $("#dropdownMenu1 .name").text(name);
	  			$(".travel-panel").removeClass("active");
		  $("#travel-panel-"+target).addClass("active");
		if ( target === 1 ) {
		  video_1.play();
      video_2.pause();
      			video_2.currentTime = 0;
}
		if ( target === 2 ) {
		  video_1.pause();
					video_1.currentTime = 0;
		  video_2.play();
    }
	}
  });

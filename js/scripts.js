$(window).load(function() {
	 $('#zoom_01').elevateZoom({
		 //    zoomType: "inner",
		 //    scrollZoom : true,
		 //    easing : true,
			// cursor: "",
			zoomType: "lens",
 			 lensShape : "round",
  			lensSize    : 200,
			zoomWindowFadeIn: 500,
			zoomWindowFadeOut: 750
   }); 

	$('.upload_close').click(function(){
		$(this).parent().fadeOut();
	});
	$('.story_close').click(function(){
		$('.story_board_main').fadeOut(1300);
	});
	//search filter tags close
	$('.tag_term').click(function(){
		$(this).fadeOut();
	});
	$('#clearAll').click(function(){
		$('.tag_term').fadeOut(
			function(){
					$('#clearAll').fadeOut();
				}
		);
	});
	
	//settings icon
	$('.setting').hover(function(){
			$(this).parent().find('span').show();
	}, function(){
		$(this).parent().find('span').hide();
		}
	
	);
	
	//mobile menu action
	$('.menuIcon').click(function(){
			$('#mobileMenu').slideToggle();
		});
	//share popup
	$(".share").click(function(){
		var current_popup = $(this).parent().parent().parent().find(".share-popup");
		$(".share-popup").slideUp('slow');
		
		if(current_popup.is(":visible")){
			current_popup.slideUp('slow');
		}else{
			current_popup.slideDown('slow');
		}
		
	
	})
	
	$(".closeBtn").click(function(){
		$(".popWrap").fadeOut(800, function(){
				$('.overlay').fadeOut(800);
			});
	
	})
	$('.closebox').click(function(){
		 $('#floatingbox').fadeOut();
	});
	
	//Home page carousel
    $('.carousel').carousel();
    qwerty = setTimeout(function(){
	    $("#foo2").carouFredSel({
		    circular: true,
		    infinite: false,
		    auto  : false,
		    prev  : { 
		      button  : "#foo2_prev",
		      key   : "left"
		    },
		    next  : { 
		      button  : "#foo2_next",
		      key   : "right"
		    }
	 	});
		$("#foo3").carouFredSel({
		    circular: true,
		    infinite: false,
		    auto  : false,
		    prev  : { 
		      button  : "#foo3_prev",
		      key   : "left"
		    },
		    next  : { 
		      button  : "#foo3_next",
		      key   : "right"
		    }
	 	});
    },100);
	
	 	//bx slider
	 $('#universal,  #otherItems, #otherSeller, #slideCol').bxSlider({
		 	pager :false,
		 });

	 	//about page slider
	 $('#aboutPager').bxSlider({
		 	pager :true,
		 });
		
		 //ORGANIC TABS
		$("#item_description_pad2").organicTabs({
			"speed": 200
		});
		
		//tabs
	$('#tab-container').easytabs();
		
	//nice scroll
	$("#listItem, #populaBar").niceScroll({
	  cursorcolor:"#5e9e9e",
	  cursorwidth:8,
	  cursorborder:'1px solid #5e9e9e'
	});

	
	
	//packery
  	var container = document.querySelector('#container');
	var pckry = new Packery( container, {
	  // options
	  itemSelector: '.galry-item'
	});
	
	//flexslider
	  $('.flexslider').flexslider({
		animation: "slide"
	  });
  


	
		
});//end window.load


$(document).ready(function () {
	$(".question").hover(function () {
		var tooltipText = $(this).attr('title');
			$(this).append('<div class="poptip"><p>'+tooltipText+'</p></div>');
		 }, function () {
		    $("div.poptip").remove();
 	 });
	//tooltip on product upload page
});


$(window).load(function() {

  // remove the scroll from mobile devices
	// only show the sticky sidebar on desktop
	function sticky_shopping_cart() {
    var window_top = $(window).scrollTop() + 20;
    var div_top = $('#product-detail-upper-fold').offset().top;
    if (window_top > div_top) {
        $('.floating-shopping-cart').addClass('float-cart');
    } else {
        $('.floating-shopping-cart').removeClass('float-cart');
    }
  }

	$(function () {
	    $(window).scroll(sticky_shopping_cart);
	    sticky_shopping_cart();
	});

	$('.menu-icon').click(function(){
		$('.mobile-nav').toggleClass('show-it');
		$('.visible-content').toggleClass('pad-it');
		$(this).toggleClass('active');
	});//mobile menu ends

	$('.search-trigger').click(function(){
		$('.faux-header').toggleClass('show-it');
		$(this).toggleClass('active');
	});//mobile search ends

	$('#form-trigger').click(function(){
		$('#contact-seller').slideToggle();
	});

	$('.blog-form-trigger').click(function(){
		$('.write-for-us').slideToggle();
	});//blog write to us form




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



	 $('.home-shop-slider').bxSlider({
	 	  minSlides:4,
		  maxSlides: 4,
		  slideWidth: 350,
		  pager:false
	 });//home page bx slider

	 $('.blog-article-slider').bxSlider({
	 	  minSlides:6,
		  maxSlides: 6,
		  slideWidth: 350,
		  pager:false
	 });//blog article bx slider

	 $('.blog-alsolike-slider').bxSlider({
	 	  minSlides:3,
		  maxSlides: 3,
		  slideWidth: 350,
		  pager:false
	 });//blog article bx slider



	 $('#universal,  #otherItems, #otherSeller, #slideCol, #slider_two').bxSlider({
		 	pager :false
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
	$('#blog-popular-tab').easytabs();//blog popular tabs

	// //nice scroll
	// $("#listItem, #populaBar").niceScroll({
	//   cursorcolor:"#5e9e9e",
	//   cursorwidth:8,
	//   cursorborder:'1px solid #5e9e9e'
	// });



	//packery
  	var container = document.querySelector('#container');
	var pckry = new Packery( container, {
	  // options
	  itemSelector: '.galry-item'
	});






});//end window.load
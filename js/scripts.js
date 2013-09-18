$(document).ready(function() {
	
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

		//ORGANIC TABS
	$("#item_description_pad2").organicTabs({
		"speed": 200
	});

});
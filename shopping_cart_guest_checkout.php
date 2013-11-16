<!DOCTYPE html>

<html>

  <head>

    <title>Rebels Market</title>

    <meta name="description" content="">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cleartype" content="on">

    <!-- Bootstrap -->
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

    <!--[if lt IE 9]>

      <script src="js/html5shiv.js"></script>

      <script src="js/respond.min.js"></script>

    <![endif]-->

    <script src="js/css_browser_selector.js" type="text/javascript"></script>
    <link href="css/custom.css" rel="stylesheet" media="screen">
    <link href="css/home.css" rel="stylesheet" media="screen">
    <link href="css/responsive.css" rel="stylesheet" media="screen">
    <link href="css/jquery.bxslider.css" rel="stylesheet" media="screen">
    <link href="css/layout.css" rel="stylesheet" type="text/css" />

  </head>
  <body>
<!--mobile header starts here-->
 <div class="mobileHeader1 clearfix">
 	<div class="full clearfix">
    		<div class="smallogo">
    			<a href="#"><img src="img/rebel-logo.png"></a>
            </div>
            <div class="menuIcon">
                <img src="img/menu-icon.png">
            </div>
    </div>
    <div class="mobileMenu" id="mobileMenu">
        <ul>
            <li><a href="#">Woman</a></li>
            <li><a href="#">Man</a></li>
            <li><a href="#">Artwork</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Decor</a></li>
            <li><a href="#">Gadgets</a></li>
            <li><a href="#">House-ware</a></li>
            <li><a href="#">Jewery &amp; Accessories</a></li>
            <li><a href="#">Sell</a></li>
            <div class="mobileSearch">
            	<form action="">
                	<input type="text" placeholder="Search...">
                    <input type="submit" value="Go">
                </form>
            </div>
        </ul>
    </div>
    
 </div>
 
<!--mobile header ends here-->
<div class="fixedHeader">
	   <section class="headerOne">
   			<div class="container">
            	<div class="fulwidth">
                    <div class="logoArea">
                        <a href="#" id="logo"></a>
                    </div> 
                    <div class="topSearch floatRight">
                        <form action="" method="get" autocomplete="on">
                            <input type="text" placeholder="Search..." title="Search folders you viewed previously" autocomplete="on">
                            <select>
                                <option>All category</option>
                                <option>Men</option>
                                <option>Women</option>
                                <option>Boho</option>
                            </select>
                            <input type="submit" value="Go">
                        </form>
                    </div>
                    

              </div>  
        </div>
   </section>
       <!--header one ends-->
       
</div>
   

<div id="content">

  <div class="container shopingSpacing">
	 <div id="top_nav">
		<ul id="purchase_steps">
        	<li id="current"><a class="Shopping_Cart" href="Shopping_Cart.html"><span>1</span>Shopping Cart</a></li>
        	<li><a class="Payment_Method" href="Payment_Method.html"><span>2</span>Payment Method</a></li>
        	<li><a class="Place_Order" href="Place_Order.html"><span>3</span>Place Order</a></li>
        </ul><!-- purchase steps ends -->
    	<div id="product_list_wrapper">
            <div class="lock">
                <h2>Secure Payments</h2>
                <p>This is a secure 128 bit SSL encrypted payment </p>
            </div>  
        </div><!-- product list wrapper ends -->
    </div>
	 <div class="block">
<h2>Shopping Cart</h2>
<div class="block_570 float_left">
<div class="paddingTB_15">
	<h4>Checkout as Guest</h4>
</div>
 <form>
	<label>Enter a valid email address so that we can email you the order reciept</label>
	<div class="clear"></div>
	<input class="input_pad_one marginT_10 marginB_10" type="text" />
	<div class="clear"></div>
	<input type="button" class="button_five marginT_10 block_130 marginB_10"  value="Guest checkout" />
	</form>
</div><!-- block_570 ends -->
<div class="block_300 float_right border_l paddingL_20">
<h2>Your Order</h2>
<p class="txt_italic marginB_10">Reserved time: <span class="txt_red">19 : 44</span> minutes left</p>
<div class="block border_b border_t paddingTB_5">
	<p>Order Subtotal <span class="float_right txt_bold">$1,150</span></p>
</div>
<div class="block border_b paddingTB_5">
	<p>Shipping<span class="float_right txt_bold">$0</span></p>
</div>
<div class="block border_b paddingTB_5">
	<p>Home delivery <span class="float_right txt_bold">$200</span></p>
</div>
<div class="block paddingTB_5">
	<p class="txt_bold">Order Subtotal <span class="float_right">$1,350</span></p>
</div>
</div><!-- block_210 ends -->
</div><!-- span 920 ends -->
</div><!-- end of .container -->

</div><!-- end of #content -->
<?php include('footer.php'); ?>
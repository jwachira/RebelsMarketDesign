<?php include('header.php'); ?>

<div id="content">

<div class="container headerMarginTop">
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
<?php include('cart_header.php'); ?>
<div id="content">

  <div class="container shopingSpacing">
              <div class="block">
    <h2>Enter Your Shipping Address</h2>
    <form>
	<div class="block_570 float_left">
        	<label class="label_one">First Name <span class="txt_red txt_italic marginL_20">this field is required</span></label>
            <input class="input_pad_one" type="text" />
        	<label class="label_one">Last Name <span class="txt_red txt_italic marginL_20">this field is required</span></label>
            <input class="input_pad_one" type="text" />
        	<label class="label_one">Address line</label>
            <input class="input_pad_one" type="text" />
            <p class="txt_11">Street address, P.0. Box , Company name, c/o</p>
        	<label class="label_one">Other Address line </label>
            <input class="input_pad_one" type="text" />
            <p class="txt_11">Apartment, Suite, Unit, Building, Floor, etc</p>
        	<label class="label_one">City</label>
            <input class="input_pad_one" type="text" />
        	<label class="label_one">Country</label>
            <select class="block_300">
                <option>United State</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
             </select>
        	<label class="label_one">State or Province</label>
            <select class="block_300">
                <option>Select State</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
             </select>
        	<label class="label_one">Postal Code </label>
            <input class="input_pad_one" type="text" />
        	<label class="label_one">Email </label>
            <input class="input_pad_one" type="text" />
        	<label class="label_one">Phone Number </label>
            <input class="input_pad_one" type="text" />
            <input type="submit" value="Submit" class="submitBtn" />
    </div><!-- block_570 ends -->
    <div class="block_300 float_right border_l paddingL_20">
    	<h2>Your total is <span class="txt_bold">$201.46</span></h2>
        <p class="marginB_10">Estimated total based on shipping to United States</p>
        <input class="button_five marginB_10 marginT_10 block_150" type="button" value="Continue Checkout" />
    	<ul class="marginT_10">
            <li class="marginR_10 float_left"><img src="img/mastercard_icon.png" width="40" height="25" alt="mastercard icon" /></li>
            <li class="marginR_10 float_left"><img src="img/maestro_icon.png" width="40" height="26" alt="maestro icon" /></li>
            <li class="marginR_10 float_left"><img src="img/visa-icon.png" width="40" height="26" alt="visa icon" /></li>
            <li class="marginR_10 float_left"><img src="img/paypal_icon.png" width="40" height="26" alt="paypal icon" /></li>
            <li class="marginR_10 float_left"><img src="img/american_empress_icon.png" width="25" height="26" alt="american express icon" /></li>
        </ul>
    </div><!-- block_230 ends -->
    </form>
</div><!-- span 920 ends -->
      </div><!-- end of .container -->

    </div><!-- end of #content -->
<?php include('footer.php'); ?>
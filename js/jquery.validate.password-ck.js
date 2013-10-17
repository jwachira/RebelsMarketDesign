/*
 * jQuery validate.password plug-in 1.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validate.password/
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * $Id$
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */(function(e){function u(e,t){return{rate:e,messageKey:t}}function a(e){return e.substring(0,1).toLowerCase()+e.substring(1)}var t=/[a-z]/,n=/[A-Z]/,r=/[0-9]/,i=/[0-9].*[0-9]/,s=/[^a-zA-Z0-9]/,o=/^(.)\1+$/;e.validator.passwordRating=function(e,f){if(!e||e.length<8)return u(0,"too-short");if(f&&e.toLowerCase().match(f.toLowerCase()))return u(0,"similar-to-username");if(o.test(e))return u(1,"very-weak");var l=t.test(e),c=n.test(a(e)),h=r.test(e),p=i.test(e),d=s.test(e);return l&&c&&h||l&&p||c&&p||d?u(4,"strong"):l&&c||l&&h||c&&h?u(3,"good"):u(2,"weak")};e.validator.passwordRating.messages={"similar-to-username":"Too similar to username","too-short":"Too short","very-weak":"Very weak",weak:"Weak",good:"Good",strong:"Strong"};e.validator.addMethod("password",function(t,n,r){var i=n.value,s=e(typeof r!="boolean"?r:[]),o=e.validator.passwordRating(i,s.val()),u=e(".password-meter",n.form);u.find(".password-meter-bar").removeClass().addClass("password-meter-bar").addClass("password-meter-"+o.messageKey);u.find(".password-meter-message").removeClass().addClass("password-meter-message").addClass("password-meter-message-"+o.messageKey).text(e.validator.passwordRating.messages[o.messageKey]);return o.rate>2},"&nbsp;");e.validator.classRuleSettings.password={password:!0}})(jQuery);
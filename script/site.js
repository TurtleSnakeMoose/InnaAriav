var ip = ip || {};
ip.site = ip.site || {};

$(function (){

	// scrolls to element when clicking on navbar menu item.
	ip.site.scrollToElement = function (item) {
		var scrollToElement = $(`.${$(item).data('scrollTo')}`).eq(0);
		$('html,body').animate({
            scrollTop: scrollToElement.offset().top
		}, 500);
	}

	// prepares and sends the contact info to e-mail by smtp.js
    ip.site.submitForm = function (submitBtn){

		var form = submitBtn.closest('form');

		if(!ip.validate.validateForm(form)) {
			return;
		}

		var subject = ip.util.buildSubject(form);
    	var body = ip.util.buildBody(form);

		ip.util.sendEmail(subject,body)
	}
	
})

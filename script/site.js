var ip = ip || {};
ip.site = ip.site || {};

$(function (){

	// scrolls to element when clicking on navbar menu item.
	ip.site.navigateToLectureSignup = function () {
		window.open('https://meshulam.co.il/purchase?b=7188235352cc1f3521ee8cc891842e37', '_blank')
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

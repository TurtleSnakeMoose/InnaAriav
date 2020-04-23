var ip = ip || {};
ip.site = ip.site || {};

$(function (){

	ip.site.navigateToLectureSignup = function () {
		window.open('https://meshulam.co.il/purchase?b=7188235352cc1f3521ee8cc891842e37', '_blank')
	}

	ip.site.navigateToLink = function (dest) {
		window.open(`https://${dest}` , '_blank')
	}

	// prepares and sends the contact info to e-mail by smtp.js
    ip.site.submitForm = function (submitBtn){

		var form = submitBtn.closest('.section').find('form');

		if(!ip.validate.validateForm(form)) {
			return;
		}

		var subject = ip.util.buildSubject(form);
    	var body = ip.util.buildBody(form);

		ip.util.sendEmail(subject,body)

		ip.util.nullifyForm();
	}
	
})
